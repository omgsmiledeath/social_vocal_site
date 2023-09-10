//КОНСТАНТЫ
const GET_ENTRIES = "GET_ENTRIES";
const CHANGE_ACCESS = "CHANGE_ACCESS";
const UPDATE_ENTRY = "UPDATE_ENTRY";
const DELETE_ENTRY = "DELETE_ENTRY";
const INSERT_ENTRY = "INSERT_ENTRY";
const CONFIRMED_STATUS = "CONFIRMED_STATUS";
const NEW_ENTRY_STATUS = "NEW_ENTRY_STATUS";
const REJECTED_STATUS = "REJECTED_STATUS";
//AC
export const GetEntriesAC = (entries) => ({action:GET_ENTRIES,entries});
export const GetAccessAC = (value) => ({action:CHANGE_ACCESS,value});
//Методы
let initialState = () => ({
    entries: [],
    itAccess : false
})


export const AdminReducer = (state=initialState,action) => {
    switch (action.type) {
        case GET_ENTRIES:
            return {
                entries:action.entries,
                itAccess:state.itAccess
            }
        case CHANGE_ACCESS:
            return {
                entries:[...state.entries],
                itAccess:action.value
            }    
        default:
            return initialState()
    }
}