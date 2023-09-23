
import { connect } from "react-redux";
import Admin from "./Admin";
import { GetAccessAC, GetEntriesAC } from "../../../Redux/AdminReducer";
let mapDispatchToProps = (dispatch) => {
    return {
        getEntriesAdmin: (entries) => dispatch(GetEntriesAC(entries)),
        getAccess : (value) => dispatch(GetAccessAC(value))
    }
}

let mapStateToProps = (state)=>{
    return {
        itAccess : state.Admin.itAccess,
        entries: state.Admin.allEntries
    }
}

export const AdminContainer = connect(mapStateToProps,mapDispatchToProps)(Admin);