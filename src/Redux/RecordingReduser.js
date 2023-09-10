


//КОНСТАНТЫ
const CONFIRMED_STATUS = 'CONFIRMED_STATUS';
const NEW_ENTRY_STATUS = "NEW_ENTRY_STATUS";

const CHANGE_SELECTED_DAY = "CHANGE_SELECTED_DAY";
const SET_NEW_ENTRY_STATUS = "SET_NEW_ENTRY_STATUS";
const CHANGE_INPUT_ENTRY = "CHANGE_INPUT_ENTRY";
const ADD_NEW_ENTRY = "ADD_NEW_ENTRY";
const CHANGE_NEW_ENTRY_OWNER = "CHANGE_NEW_ENTRY_OWNER";
const CHANGE_NEW_ENTRY_PHONE = "CHANGE_NEW_ENTRY_PHONE";
const GET_ENTRIES = "GET_ENTRIES";

//Action Creators
export const ChangeSelectedDayCreator = (newDay) => { return { type: CHANGE_SELECTED_DAY, day: newDay } };
export const ChangeInputEntryStateCreator = (id) => { return { type: CHANGE_INPUT_ENTRY, checkedId: id } };
export const AddNewEntryCreator = () => { return { type: ADD_NEW_ENTRY } }
export const ChangeNewEntryOwnerCreator = (owner) => ({ type: CHANGE_NEW_ENTRY_OWNER, value: owner });
export const ChangeNewEntryPhoneCreator = (phone) => ({ type: CHANGE_NEW_ENTRY_PHONE, value: phone });
export const GetEntriesAC =(entries)=> ({type:GET_ENTRIES,value:entries})



//Временные методы
const createInputEntries = (date) => {
    let entries = [];
    for (let i = 1; i <= 13; i++) {
        let year = date.getFullYear();
        let month = date.getMonth();
        let day = date.getDate();
        let createDate = new Date(year, month, day, 10 + i);
        entries.push({ id: i, date: createDate, checked: false,disabled:false})
    }
    return entries;
}
export const ConvertNEToEntry= (newEntry) => {
            let newEntries =[];
            if(newEntry.hourEntries.length>0){
                for (let i = 0; i < newEntry.hourEntries.length; i++) {
                    newEntries.push({
                        date: new Date(newEntry.hourEntries[i].date),
                        status: CONFIRMED_STATUS,
                        owner: newEntry.owner,
                        desc:newEntry.phone
                    });
                }
            return newEntries
            }
        }      

//добавление статус сообщений по записям
const hourEntriesPusher = (item,newEntry) => {
    if (item.checked === true) {
        newEntry.hourEntries.push(item);
        newEntry.statusText.push({date:item.date,text:`Добавленно время: ${item.date}`});
    }
    else {
        let index = newEntry.hourEntries.findIndex((item) => item.checked === false);
        newEntry.hourEntries.splice(index, 1);
        index = newEntry.statusText.findIndex((subitem)=>subitem.date===item.date);
        newEntry.statusText.splice(index,1);
    }
}
//отметки о выделенном времени на DayView
const checkAction = (inputEntries, stateNewEntry, action) => {
    let tempEntries = inputEntries.map((item) => {
        if (item.id === action.checkedId) {
            item.checked = !item.checked;
            hourEntriesPusher(item,stateNewEntry)
        }
        return item;
    });

    let idArr = stateNewEntry.hourEntries.map((item) => item.id);
    if (idArr.length > 1) {        
        MiddleInputsChecker(stateNewEntry,inputEntries,Math.max(...idArr)-1,Math.min(...idArr)-1);

    }
    stateNewEntry.hourEntries.sort((a,b) => a.id - b.id);
    stateNewEntry.statusText.sort((a,b) => a.date - b.date);
     return tempEntries;

}
//Поиск и отметка input которые находятся между выделенными позициями
const MiddleInputsChecker = (newEntry,inputEntries,maxId,minId) => {
    
    if((maxId<=minId) || (maxId<0) )  return;
    if ((inputEntries[maxId].checked===true) || (inputEntries[maxId].disabled===true)) {
        MiddleInputsChecker(newEntry,inputEntries,maxId-1,minId)
    }
    else {
        inputEntries[maxId].checked = !inputEntries[maxId].checked;
        hourEntriesPusher(inputEntries[maxId],newEntry)
        MiddleInputsChecker(newEntry,inputEntries,maxId-1,minId);
    }
}

//Начальное состояние для Reducer
// let initialState = {

//         entries: [
//             {
//                 id: 1,
//                 date: new Date(2023, 7, 4, 18, 0),
//                 status: CONFIRMED_STATUS,
//                 owner: "band1"
//             },
//             {
//                 id: 2,
//                 date: new Date(2023, 7, 4, 19, 0),
//                 status: CONFIRMED_STATUS,
//                 owner: "band1"
//             },
//             {
//                 id: 3,
//                 date: new Date(2023, 7, 5, 18, 0),
//                 status: CONFIRMED_STATUS,
//                 owner: "band2"
//             },
//             {
//                 id:20,
//                 date:new Date(2023,7,20,15,0),
//                 status:CONFIRMED_STATUS,
//                 owner:"band3"
//             }],
//         inputEntries: createInputEntries(new Date(Date.now())),
//         selectedDay: new Date(Date.now()),
//         newEntry: { hourEntries: [], owner: "1111", phone: '', status: NEW_ENTRY_STATUS,statusText:[]}
// }

let initialState = {
    entries: [],
    inputEntries: createInputEntries(new Date(Date.now())),
    selectedDay: new Date(Date.now()),
    newEntry: { hourEntries: [], owner: "1111", phone: '', status: NEW_ENTRY_STATUS,statusText:[]}
}


//RecordingReducer 
export const RecordingReducer = (state =initialState, action) => {
    switch (action.type) {
        case CHANGE_SELECTED_DAY:
            return {
                    entries: state.entries,
                    selectedDay: action.day,
                    newEntry: state.newEntry,
                    inputEntries: createInputEntries(action.day)
            };
        case SET_NEW_ENTRY_STATUS:
            return state;
        case CHANGE_INPUT_ENTRY:
            return {
                    entries: [...state.entries],
                    inputEntries: checkAction(state.inputEntries, state.newEntry, action),
                    selectedDay: state.selectedDay,
                    newEntry: {...state.newEntry},
            };
        case ADD_NEW_ENTRY:
            if(state.newEntry.hourEntries.length>0){
            // let newEntries = ConvertNEToEntry(state.newEntry)
                return {
                    entries: [],
                    inputEntries: createInputEntries(state.selectedDay),
                    selectedDay: state.selectedDay,
                    newEntry: { hourEntries: [], owner: "", phone: '', status: NEW_ENTRY_STATUS,statusText:[]}
                }
            } 
            else {
                state.newEntry.statusText.push({date:Date.now(),text:"Выберите время"})
                return {
                    entries: state.entries,
                    inputEntries: state.inputEntries,
                    selectedDay: state.selectedDay,
                    newEntry: {...state.newEntry}
                }
            }
        case CHANGE_NEW_ENTRY_OWNER:
            let changedEntryByOwner = {
                hourEntries: state.newEntry.hourEntries,
                owner: action.value,
                phone: state.newEntry.phone,
                status: state.newEntry.status,
                statusText: state.newEntry.statusText
            }
            return {
                    entries: state.entries,
                    inputEntries: state.inputEntries,
                    selectedDay: state.selectedDay,
                    newEntry: changedEntryByOwner
            }
        case CHANGE_NEW_ENTRY_PHONE:
            if(action.value==='') state.newEntry.statusText.push({date:Date.now(),text:"Укажите номер телефона"});
            let changedEntryByPhone = {
                hourEntries: state.newEntry.hourEntries,
                owner: state.newEntry.owner,
                phone: action.value,
                status: state.newEntry.status,
                statusText:state.newEntry.statusText
            }
            return {
                    entries: state.entries,
                    inputEntries: state.inputEntries,
                    selectedDay: state.selectedDay,
                    newEntry: changedEntryByPhone
            }   
        case GET_ENTRIES:
            return {
                entries:action.value,
                inputEntries:[...state.inputEntries],
                selectedDay:state.selectedDay,
                newEntry:{...state.newEntry}
            }    
        default:
            return state;
    }
}