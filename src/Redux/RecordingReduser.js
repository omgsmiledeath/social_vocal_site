//КОНСТАНТЫ
const CONFIRMED_STATUS = 'CONFIRMED_STATUS';
const NEW_ENTRY_STATUS = "NEW_ENTRY_STATUS";

const CHANGE_SELECTED_DAY = "CHANGE_SELECTED_DAY";
const setNewEntryStatus = "SET_NEW_ENTRY_STATUS";
const CHANGE_INPUT_ENTRY = "CHANGE_INPUT_ENTRY";
const ADD_NEW_ENTRY = "ADD_NEW_ENTRY";
const CHANGE_NEW_ENTRY_OWNER = "CHANGE_NEW_ENTRY_OWNER";


//Action Creators
export const ChangeSelectedDayCreator = (newDay) => { return { type: CHANGE_SELECTED_DAY, day: newDay } };
export const ChangeInputEntryStateCreator = (id) => { return { type: CHANGE_INPUT_ENTRY, checkedId: id } };
export const AddNewEntryCreator = () => { return { type: ADD_NEW_ENTRY } }
export const ChangeNewEntryOwnerCreator = (owner) => ({type:CHANGE_NEW_ENTRY_OWNER,value:owner});
//Временные методы
const createInputEntries = (date) => {
    let entries = [];
    for (let i = 1; i <= 13; i++) {
        let year = date.getFullYear();
        let month = date.getMonth();
        let day = date.getDate();
        let createDate = new Date(year, month, day, 10 + i);
        entries.push({ id: i, date: createDate, checked: false })
    }
    return entries;
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
            },],
        inputEntries: createInputEntries(new Date(Date.now())),
        selectedDay: new Date(2023, 8, 4),
        newEntry: { hourEntries: [], owner: "1111", status: NEW_ENTRY_STATUS }
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
            const stateNewEntry = state.Recording.newEntry;
            return {
                Recording: {
                    entries: state.Recording.entries,
                    inputEntries: state.Recording.inputEntries.map((item) => {
                        if (item.id === action.checkedId) {
                            debugger;
                            item.checked = !item.checked;
                            if(item.checked===true)
                            {
                            stateNewEntry.hourEntries.push(item);
                            }
                            else {
                                
                            let index = stateNewEntry.hourEntries.findIndex((item)=>item.checked===false);
                            stateNewEntry.hourEntries.slice(index,index); 
                            }

                        }
                        return item;
                    }),
                    selectedDay: state.Recording.selectedDay,
                    newEntry: stateNewEntry,
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
                    newEntry: { hourEntries: [], owner: "", status: NEW_ENTRY_STATUS }
                }
            }
            case CHANGE_NEW_ENTRY_OWNER:
                
                let changedEntry = {
                    hourEntries:state.Recording.newEntry.hourEntries,
                    owner:action.value,
                    status:state.Recording.newEntry.status
                }
                return {
                    Recording: {
                        entries: state.Recording.entries,
                        inputEntries: state.Recording.inputEntries,
                        selectedDay:state.Recording.selectedDay,
                        newEntry: changedEntry
                    }
                }
        default:
            return state;

    }
}