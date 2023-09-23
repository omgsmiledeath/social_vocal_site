//КОНСТАНТЫ
const GET_ENTRIES = "GET_ENTRIES";
const CHANGE_ACCESS = "CHANGE_ACCESS";
// const UPDATE_ENTRY = "UPDATE_ENTRY";
// const DELETE_ENTRY = "DELETE_ENTRY";
// const INSERT_ENTRY = "INSERT_ENTRY";
// const CONFIRMED_STATUS = "CONFIRMED_STATUS";
// const NEW_ENTRY_STATUS = "NEW_ENTRY_STATUS";
// const REJECTED_STATUS = "REJECTED_STATUS";
//AC
export const GetEntriesAC = (newEntries) => ({type:GET_ENTRIES,entries:newEntries});
export const GetAccessAC = (value) => ({type:CHANGE_ACCESS,itAccess:value});
//Методы
let initialState = {
    allEntries: [],
    itAccess : false
}


export const AdminReducer = (state=initialState,action) => {
    switch (action.type) {
        case GET_ENTRIES:
            debugger
            return {
                allEntries:action.entries,
                itAccess:state.itAccess
            }
        case CHANGE_ACCESS:
            return {
                allEntries:state.allEntries,
                itAccess:action.itAccess
            }    
        default:
            return state;
    }
}