//КОНСТАНТЫ
const CONFIRMED_STATUS = 'CONFIRMED_STATUS';
const CHANGE_SELECTED_DAY = "CHANGE_SELECTED_DAY";
const setNewEntryStatus = "SET_NEW_ENTRY_STATUS";
const CHANGE_INPUT_ENTRY =  "CHANGE_INPUT_ENTRY";

//Action Creators
export const ChangeSelectedDayCreator = (newDay) => {return { type: CHANGE_SELECTED_DAY, day: newDay }};
export const ChangeInputEntryStateCreator = (id) =>  {return { type: CHANGE_INPUT_ENTRY, checkedId: id }};


//Временные методы
const createInputEntries = () => {
    let entries=[];
    for (let i = 1; i <= 12; i++) {
        entries.push({ id: i,date:new Date().setHours(10+i),checked: true })
    }
    return entries;
}

//Начальное состояние для Reducer
let initialState = {
    Recording: {
        entries: [
            {
                id: 1,
                date: new Date(2023,8,4,18,0),
                status: CONFIRMED_STATUS,
                owner: "band1"
            },
            {
                id: 2,
                date: new Date(2023,8,4,19,0),
                status: CONFIRMED_STATUS,
                owner: "band1"
            },
            {
                id: 3,
                date: new Date(2023,8,5,18,0),
                status: CONFIRMED_STATUS,
                owner: "band2"
            },],
            inputEntries: createInputEntries(),
        selectedDay: 4,
        newEntry: {}
    }
}

//RecordingReducer 
export const RecordingReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_SELECTED_DAY:
            return {
                Recording:{
                entries: state.Recording.entries,
                selectedDay: action.day,
                newEntry: state.Recording.newEntry,
                inputEntries: state.Recording.inputEntries
                }
            };
        case setNewEntryStatus.type:
            return state;
        case CHANGE_INPUT_ENTRY:
           
            return {
                Recording:{
                entries: state.Recording.entries,
                selectedDay: state.Recording.selectedDay,
                newEntry: state.Recording.newEntry,
                inputEntries: state.Recording.inputEntries.map((item) => {                  
                    if (item.id === action.checkedId) item.checked = !item.checked;
                    return item;
                })
            }
            };
        default:
            return state;

    }
}