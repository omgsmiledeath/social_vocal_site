//КОНСТАНТЫ
const CONFIRMED_STATUS = 'CONFIRMED_STATUS';
const NEW_ENTRY_STATUS = "NEW_ENTRY_STATUS";

const CHANGE_SELECTED_DAY = "CHANGE_SELECTED_DAY";
const setNewEntryStatus = "SET_NEW_ENTRY_STATUS";
const CHANGE_INPUT_ENTRY = "CHANGE_INPUT_ENTRY";
const ADD_NEW_ENTRY = "ADD_NEW_ENTRY";
const CHANGE_NEW_ENTRY_OWNER = "CHANGE_NEW_ENTRY_OWNER";
const CHANGE_NEW_ENTRY_PHONE = "CHANGE_NEW_ENTRY_PHONE";
const CHANGE_DISABLE_INPUT_ENTRY = "CHANGE_DISABLE_INPUT_ENTRY";

//Action Creators
export const ChangeSelectedDayCreator = (newDay) => { return { type: CHANGE_SELECTED_DAY, day: newDay } };
export const ChangeInputEntryStateCreator = (id) => { return { type: CHANGE_INPUT_ENTRY, checkedId: id } };
export const AddNewEntryCreator = () => { return { type: ADD_NEW_ENTRY } }
export const ChangeNewEntryOwnerCreator = (owner) => ({ type: CHANGE_NEW_ENTRY_OWNER, value: owner });
export const ChangeNewEntryPhoneCreator = (phone) => ({ type: CHANGE_NEW_ENTRY_PHONE, value: phone });
export const ChangeDisabledInputCreator = () => ({type:CHANGE_DISABLE_INPUT_ENTRY})
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
const checkAction = (inputEntries, stateNewEntry, action) => {
    let tempEntries = inputEntries.map((item) => {
        if (item.id === action.checkedId) {
            item.checked = !item.checked;
            if (item.checked === true) {
                stateNewEntry.hourEntries.push(item);
            }
            else {
                let index = stateNewEntry.hourEntries.findIndex((item) => item.checked === false);
                stateNewEntry.hourEntries.slice(index, index);
                debugger
            }
        }
        return item;
    });

    // let idArr = stateNewEntry.hourEntries.map((item) => item.id);
    // if (idArr.length > 1) {
    //     for (let i = Math.min(...idArr); i < Math.max(...idArr)-1; i++) {
    //         if (tempEntries[i].enabled===false) break;
    //         tempEntries[i].checked = true;
    //         stateNewEntry.hourEntries.push(tempEntries[i]);
    //     }

    // }
    return tempEntries;

}

//Начальное состояние для Reducer
let initialState = {
    Recording: {
        entries: [
            {
                id: 1,
                date: new Date(2023, 7, 4, 18, 0),
                status: CONFIRMED_STATUS,
                owner: "band1"
            },
            {
                id: 2,
                date: new Date(2023, 7, 4, 19, 0),
                status: CONFIRMED_STATUS,
                owner: "band1"
            },
            {
                id: 3,
                date: new Date(2023, 7, 5, 18, 0),
                status: CONFIRMED_STATUS,
                owner: "band2"
            },
            {
                id:20,
                date:new Date(2023,7,20,15,0),
                status:CONFIRMED_STATUS,
                owner:"band3"
            }],
        inputEntries: createInputEntries(new Date(Date.now())),
        selectedDay: new Date(Date.now()),
        newEntry: { hourEntries: [], owner: "1111", phone: '', status: NEW_ENTRY_STATUS }
    }
}

//RecordingReducer 
export const RecordingReducer = (state = initialState, action) => {

    switch (action.type) {
        case CHANGE_SELECTED_DAY:
            return {
                Recording: {
                    entries: state.Recording.entries,
                    selectedDay: action.day,
                    newEntry: state.Recording.newEntry,
                    inputEntries: createInputEntries(action.day)
                }
            };
        case setNewEntryStatus.type:
            return state;
        case CHANGE_INPUT_ENTRY:
            return {
                Recording: {
                    entries: state.Recording.entries,
                    inputEntries: checkAction(state.Recording.inputEntries, state.Recording.newEntry, action),
                    selectedDay: state.Recording.selectedDay,
                    newEntry: state.Recording.newEntry,
                }
            };
        case ADD_NEW_ENTRY:
            let newEntries = [];
            let newEntry = state.Recording.newEntry;
            for (let i = 0; i < newEntry.hourEntries.length; i++) {
                newEntries.push({
                    id: 4 + i,
                    date: new Date(newEntry.hourEntries[i].date),
                    status: CONFIRMED_STATUS,
                    owner: newEntry.owner
                });
            }
            return {
                Recording: {
                    entries: [...state.Recording.entries, ...newEntries],
                    inputEntries: createInputEntries(state.Recording.selectedDay),
                    selectedDay: state.Recording.selectedDay,
                    newEntry: { hourEntries: [], owner: "", phone: '', status: NEW_ENTRY_STATUS }
                }
            }
        case CHANGE_NEW_ENTRY_OWNER:

            let changedEntryByOwner = {
                hourEntries: state.Recording.newEntry.hourEntries,
                owner: action.value,
                phone: state.Recording.newEntry.phone,
                status: state.Recording.newEntry.status
            }
            return {
                Recording: {
                    entries: state.Recording.entries,
                    inputEntries: state.Recording.inputEntries,
                    selectedDay: state.Recording.selectedDay,
                    newEntry: changedEntryByOwner
                }
            }
        case CHANGE_NEW_ENTRY_PHONE:
            let changedEntryByPhone = {
                hourEntries: state.Recording.newEntry.hourEntries,
                owner: state.Recording.newEntry.owner,
                phone: action.value,
                status: state.Recording.newEntry.status
            }
            return {
                Recording: {
                    entries: state.Recording.entries,
                    inputEntries: state.Recording.inputEntries,
                    selectedDay: state.Recording.selectedDay,
                    newEntry: changedEntryByPhone
                }
            }
        // case CHANGE_DISABLE_INPUT_ENTRY:
        //     let newInputEntries = state.Recording.inputEntries.map(()=> {
                
        //     });
        //     return {
        //         Recording: {
        //             entries: state.Recording.entries,
        //             inputEntries: ,
        //             selectedDay: state.Recording.selectedDay,
        //             newEntry: changedEntryByPhone
        //         }
        //     }
        default:
            return state;

    }
}