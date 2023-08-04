
export let changeSelectedDay = (newDay) => ({type:"CHANGE_SELECTED_DAY",day:newDay});
export let setNewEntryStatus = () => ({type:"SET_NEW_ENTRY_STATUS"});


let initialState = {
    entries:[
        {id:1,
        date:"04.08.2023T19:00",
        status:"Confirmed",
        owner:"band1"},
        {id:2,
        date:"04.08.2023T20:00",
        status:"Confirmed",
        owner:"band1"},
        {id:3,
            date:"05.08.2023T21:00",
            status:"Confirmed",
            owner:"band1"},],
    selectedDay: 4,
    newEntry:{}        
}

export const RecordingReducer = (state=initialState,action) => {
    switch(action.type){
        case changeSelectedDay.type:
            return {
                entries: state.entries,
                selectedDay:action.day,
                newEntry:state.newEntry};
        case setNewEntryStatus.type:
            return state;
        default:
            return state;

    }
}