import { connect } from 'react-redux';
import ConfirmForm from './ConfirmForm';
import { AddNewEntryCreator, ChangeNewEntryOwnerCreator, ChangeNewEntryPhoneCreator, GetEntriesAC } from "../../../../Redux/RecordingReduser";
import { ConvertNEToEntry } from '../../../../Redux/RecordingReduser';


let mapStateToProps = (state) => {
    return {
        newEntry : state.Recording.newEntry
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addEntry : () => dispatch(AddNewEntryCreator()),
        changeOwner : (owner)=>dispatch(ChangeNewEntryOwnerCreator(owner)),
        changePhone: (phone)=>dispatch(ChangeNewEntryPhoneCreator(phone)),
        EntriesToPost: (newEntry) => ConvertNEToEntry(newEntry) ,
        getEntries:(entries) => dispatch(GetEntriesAC(entries))
    }
}

const ConfirmFormContainer = connect(mapStateToProps,mapDispatchToProps)(ConfirmForm);

export default ConfirmFormContainer;