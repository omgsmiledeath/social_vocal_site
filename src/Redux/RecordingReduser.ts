
import { act } from "react-dom/test-utils";
import { IChangeDayAction, IChangeInputIdAction, IChangeTextInputAction, IGetEntriesAction, IReducerAction, NewEntry, QueryEntry, ReducerEntry, ReducerInitialState } from "../Types/Interfaces";

//КОНСТАНТЫ
//const CONFIRMED_STATUS = 'CONFIRMED_STATUS';
const NEW_ENTRY_STATUS = "NEW_ENTRY_STATUS";
const NOT_APPROVED_STATUS = 'NOT_APPROVED_STATUS';

const CHANGE_SELECTED_DAY = "CHANGE_SELECTED_DAY";
const SET_NEW_ENTRY_STATUS = "SET_NEW_ENTRY_STATUS";
const CHANGE_INPUT_ENTRY = "CHANGE_INPUT_ENTRY";
const ADD_NEW_ENTRY = "ADD_NEW_ENTRY";
const CHANGE_NEW_ENTRY_OWNER = "CHANGE_NEW_ENTRY_OWNER";
const CHANGE_NEW_ENTRY_PHONE = "CHANGE_NEW_ENTRY_PHONE";
const GET_ENTRIES = "GET_ENTRIES";
const GET_FILTRED_ENTRIES = "GET_FILTRED_ENTRIES";
//Action Creators
export const ChangeSelectedDayCreator = (newDay:Date) => { return { type: CHANGE_SELECTED_DAY, day: newDay } };
export const ChangeInputEntryStateCreator = (id:number) => { return { type: CHANGE_INPUT_ENTRY, checkedId: id } };
export const AddNewEntryCreator = () => { return { type: ADD_NEW_ENTRY } }
export const ChangeNewEntryOwnerCreator = (owner:string) => ({ type: CHANGE_NEW_ENTRY_OWNER, value: owner });
export const ChangeNewEntryPhoneCreator = (phone:string) => ({ type: CHANGE_NEW_ENTRY_PHONE, value: phone });
export const GetEntriesAC = (entries:QueryEntry[]) => ({ type: GET_ENTRIES, value: entries })
export const GetFiltredEntriesAC = (day:Date) => ({ type: GET_FILTRED_ENTRIES, value: day })

//Creator
const blobNewEmptyCreator = () => ({ hourEntries: [], owner: "1111", phone: '', status: NEW_ENTRY_STATUS, statusText: [] });

//Временные методы
const createInputEntries = (date:Date) => {
    let entries:ReducerEntry[] = [];
    for (let i = 1; i <= 13; i++) {
        let year = date.getFullYear();
        let month = date.getMonth();
        let day = date.getDate();
        let createDate = new Date(year, month, day, 10 + i);
        entries.push({ id: i, date: createDate, checked: false, disabled: false ,status:NEW_ENTRY_STATUS})
    }
    return entries;
}
export const ConvertNEToEntry = (newEntry:NewEntry) => {
    let newEntries:QueryEntry[] = [];
    if (newEntry.hourEntries.length > 0) {
        for (let i = 0; i < newEntry.hourEntries.length; i++) {
            newEntries.push({
                date: new Date(newEntry.hourEntries[i].date),
                status: NOT_APPROVED_STATUS,
                owner: newEntry.owner,
                desc: newEntry.phone
            });
        }
        return newEntries
    }
}

//добавление статус сообщений по записям
const hourEntriesPusher = (item:ReducerEntry, newEntry:NewEntry) => {
    if (item.checked === true) {
        newEntry.hourEntries.push(item);
        newEntry.statusText.push({ date: item.date, text: `Добавленно время: ${item.date}` });
    }
    else {
        let index = newEntry.hourEntries.findIndex((item) => item.checked === false);
        newEntry.hourEntries.splice(index, 1);
        index = newEntry.statusText.findIndex((subitem) => subitem.date === item.date);
        newEntry.statusText.splice(index, 1);
    }
}
//отметки о выделенном времени на DayView
const checkAction = (inputEntries:ReducerEntry[], stateNewEntry:NewEntry, action:IChangeInputIdAction) => {
    let tempEntries = inputEntries.map((item) => {
        if (item.id === action.checkedId) {
            item.checked = !item.checked;
            hourEntriesPusher(item, stateNewEntry)
        }
        return item;
    });

    let idArr = stateNewEntry.hourEntries.map((item) => item.id);
    if (idArr.length > 1) {
        MiddleInputsChecker(stateNewEntry, inputEntries, Math.max(...idArr) - 1, Math.min(...idArr) - 1);

    }
    stateNewEntry.hourEntries.sort((a, b) => a.id - b.id);
    stateNewEntry.statusText.sort((a, b) => Number(a.date) - Number(b.date));
    return tempEntries;

}
//Поиск и отметка input которые находятся между выделенными позициями
const MiddleInputsChecker = (newEntry:NewEntry, inputEntries:ReducerEntry[], maxId:number, minId:number) => {

    if ((maxId <= minId) || (maxId < 0)) return;
    if ((inputEntries[maxId].checked === true) || (inputEntries[maxId].disabled === true)) {
        MiddleInputsChecker(newEntry, inputEntries, maxId - 1, minId)
    }
    else {
        inputEntries[maxId].checked = !inputEntries[maxId].checked;
        hourEntriesPusher(inputEntries[maxId], newEntry)
        MiddleInputsChecker(newEntry, inputEntries, maxId - 1, minId);
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

let initialState : ReducerInitialState= {
    entries: [],
    inputEntries: createInputEntries(new Date(Date.now())),
    selectedDay: new Date(Date.now()),
    newEntry: blobNewEmptyCreator()
}
//Старый метод до изменения работы API
// const filtredSelectedDayEntries = (day, entries = []) => {
//     let newArr = [];
//     if (entries.length === 0) {
//         return createInputEntries(day);
//     }
//     else {
//         entries.forEach((item) => {
//             debugger
//             let thisday = Number(item.date.getDate());
//             let stateDay = Number(day.getDate())
//             if (thisday === stateDay) {

//                 newArr.push(item);
//             }
//         })
//         let newInputEntries = createInputEntries(day).map((item) => {
//             newArr.forEach(element => {
//                 let elementHour = element.date.getHours();
//                 let itemHour = item.date.getHours();
//                 if (elementHour === itemHour){
//                     item.disabled = true;
//                     item.status = element.status;          
//                 }
//             });
//             return item;
//         });

//         return newInputEntries;
//     }
// }
const filtredSelectedDayEntries = (day:Date, entries :QueryEntry[]= []) => {
    if (entries.length === 0) {
        return createInputEntries(day);
    }
    else {
        let newInputEntries = createInputEntries(day).map((item) => {
            entries.forEach(element => {
                let elementHour = element.date.getHours();
                let itemHour = item.date.getHours();
                if (elementHour === itemHour){
                    item.disabled = true;
                    item.status = element.status;          
                }
            });
            return item;
        });

        return newInputEntries;
    }
}
//RecordingReducer 
export const RecordingReducer = (state = initialState, action:IReducerAction) => {
    switch (action.type) {
        case CHANGE_SELECTED_DAY:
            let selectDate = action as IChangeDayAction;
            return {
                entries: state.entries,
                selectedDay: selectDate.day,
                newEntry: { hourEntries: [], owner: "1111", phone: '', status: NEW_ENTRY_STATUS, statusText: [] },
                inputEntries: filtredSelectedDayEntries(selectDate.day, state.entries)
            };
        case SET_NEW_ENTRY_STATUS:
            return state;
        case CHANGE_INPUT_ENTRY:
            return {
                entries: state.entries,
                inputEntries: checkAction(state.inputEntries, state.newEntry, action as IChangeInputIdAction),
                selectedDay: state.selectedDay,
                newEntry: { ...state.newEntry },
            };
        case ADD_NEW_ENTRY:
            if (state.newEntry.hourEntries.length > 0) {
                // let newEntries = ConvertNEToEntry(state.newEntry)
                return {
                    entries: [],
                    inputEntries: filtredSelectedDayEntries(state.selectedDay, state.entries),
                    selectedDay: state.selectedDay,
                    newEntry: blobNewEmptyCreator()
                }
            }
            else {
                state.newEntry.statusText.push({ date: new Date(Date.now()), text: "Выберите время" })
                return {
                    entries: state.entries,
                    inputEntries: state.inputEntries,
                    selectedDay: state.selectedDay,
                    newEntry: { ...state.newEntry }
                }
            }
        case CHANGE_NEW_ENTRY_OWNER:
            let changedEntryByOwner = {
                hourEntries: state.newEntry.hourEntries,
                owner: (action as IChangeTextInputAction).value,
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
            let toAction = action as IChangeTextInputAction;
            if (toAction.value === '') state.newEntry.statusText.push({ date: new Date(Date.now()), text: "Укажите номер телефона" });
            let changedEntryByPhone = {
                hourEntries: state.newEntry.hourEntries,
                owner: state.newEntry.owner,
                phone: toAction.value,
                status: state.newEntry.status,
                statusText: state.newEntry.statusText
            }
            return {
                entries: state.entries,
                inputEntries: state.inputEntries,
                selectedDay: state.selectedDay,
                newEntry: changedEntryByPhone
            }
        case GET_ENTRIES:
            
            return {
                entries: (action as IGetEntriesAction).value,
                inputEntries: filtredSelectedDayEntries(state.selectedDay, (action as IGetEntriesAction).value),
                selectedDay: state.selectedDay,
                newEntry: blobNewEmptyCreator()
            }
        case GET_FILTRED_ENTRIES:
            return {
                entries: state.entries,
                inputEntries: filtredSelectedDayEntries(state.selectedDay, state.entries),
                selectedDay: state.selectedDay,
                newEntry: { ...state.newEntry }
            }
        default:
            return state;
    }
}