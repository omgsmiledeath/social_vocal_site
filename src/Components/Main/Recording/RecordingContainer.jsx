
import { connect } from 'react-redux';
import Recording from './Recording';
import { ChangeSelectedDayCreator,GetEntriesAC} from "../../../Redux/RecordingReduser";

let mapStateToProps = (state) => {
    return{
        date: state.Recording.selectedDay
    }
}

let mapDispatchToProps = (dispatch) => {
    
    return{
        changeDay: (newDay) => { dispatch(ChangeSelectedDayCreator(newDay)) },
        getEntries: (entries) => {dispatch(GetEntriesAC(entries))}
    }
}

const RecordingContainer = connect(mapStateToProps, mapDispatchToProps)(Recording);

export default RecordingContainer;