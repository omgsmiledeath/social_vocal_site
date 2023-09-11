
import { connect } from "react-redux";
import Admin from "./Admin";
import { GetAccessAC, GetEntriesAC } from "../../../Redux/AdminReducer";
let mapDispatchToProps = (dispatch) => {
    return {
        getEntries: (entries) => dispatch(GetEntriesAC(entries)),
        getAccess : (value) => dispatch(GetAccessAC(value))
    }
}

let mapStateToProps = (state)=>{
    return {
        itAccess : state.Admin.itAccess
    }
}

export const AdminContainer = connect(mapStateToProps,mapDispatchToProps)(Admin);