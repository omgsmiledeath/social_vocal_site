import { connect } from 'react-redux';
import ConfirmForm from './ConfirmForm';
import { AddNewEntryCreator } from "../../../../Redux/RecordingReduser";

let mapStateToProps = (state) => {
    return {
        newEntry : state.Recording.newEntry
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addEntry : () => dispatch(AddNewEntryCreator())
    }
}

const ConfirmFormContainer = connect(mapStateToProps,mapDispatchToProps)(ConfirmForm);

export default ConfirmFormContainer;