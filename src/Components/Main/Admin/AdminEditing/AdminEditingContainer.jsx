import { connect } from "react-redux"
import { EditEntryStatusAdminAC } from "../../../../Redux/AdminReducer"
import AdminEditing from "./AdminEditing"

let mapStateToProps = (state) => {
    return {
        selectedEntry:state.selectedEntry
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        changeStatus:(status)  => dispatch(EditEntryStatusAdminAC(status))  
    }
}

export const AdminEditingContainer = connect(mapStateToProps,mapDispatchToProps)(AdminEditing);