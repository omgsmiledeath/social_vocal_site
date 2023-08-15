import { connect } from 'react-redux';
import ConfirmForm from './ConfirmForm';
import { AddNewEntryCreator, ChangeNewEntryOwnerCreator } from "../../../../Redux/RecordingReduser";

let mapStateToProps = (state) => {
    return {
        newEntry : state.Recording.newEntry
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addEntry : () => dispatch(AddNewEntryCreator()),
        changeOwner : (owner)=>dispatch(ChangeNewEntryOwnerCreator(owner))
    }
}

const ConfirmFormContainer = connect(mapStateToProps,mapDispatchToProps)(ConfirmForm);

export default ConfirmFormContainer;