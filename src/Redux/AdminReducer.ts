//КОНСТАНТЫ
const GET_ENTRIES = "GET_ENTRIES_ADMIN";
const CHANGE_ACCESS = "CHANGE_ACCESS";
const EDIT_ENTRY_STATUS = "EDIT_ENTRY_STATUS";
const EDIT_ENTRY_DATE = "EDIT_ENTRY_DATE";
const EDIT_ENTRY_OWNER ="EDIT_ENTRY_OWNER";
const EDIT_ENTRY_DESC= "EDIT_ENTRY_DESC";

// const UPDATE_ENTRY = "UPDATE_ENTRY";
// const DELETE_ENTRY = "DELETE_ENTRY";
// const INSERT_ENTRY = "INSERT_ENTRY";
export const CONFIRMED_STATUS = "CONFIRMED_STATUS";
export const NEW_ENTRY_STATUS = "NEW_ENTRY_STATUS";
export const REJECTED_STATUS = "REJECTED_STATUS";
export const NOT_APPROVED_STATUS = 'NOT_APPROVED_STATUS';

//AC
export const GetEntriesAC = (newEntries) => ({type:GET_ENTRIES,entries:newEntries});
export const GetAccessAC = (value:boolean) => ({type:CHANGE_ACCESS,itAccess:value});
export const EditEntryStatusAdminAC = (status:string) =>({type:EDIT_ENTRY_STATUS,status:status});
export const EditEntryDateAdminAC = (date:Date) =>({type:EDIT_ENTRY_DATE,date:date});
export const EditEntryOwnerAdminAC =(owner:string) => ({type:EDIT_ENTRY_OWNER,owner:owner});
export const EditEntryDescAdminAC = (desc:string) => ({type:EDIT_ENTRY_DESC,desc:desc});

//Методы
let initialState = {
    allEntries: [],
    itAccess : false,
    editedEntries: []
}


export const AdminReducer = (state=initialState,action) => {
    switch (action.type) {
        case GET_ENTRIES:
            return {
                allEntries:action.entries,
                itAccess:state.itAccess,
                editedEntries:[]
            }
        case CHANGE_ACCESS:
            return {
                allEntries:state.allEntries,
                itAccess:action.itAccess,
                editedEntries:[]
            }    
        default:
            return state;
    }
}