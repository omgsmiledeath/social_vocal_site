
import { connect } from 'react-redux';
import Recording from './Recording';
import { ChangeSelectedDayCreator } from "../../../Redux/RecordingReduser";

let mapStateToProps = (state) => {
    return{
        Recording: state.Recording
    }
}

let mapDispatchToProps = (dispatch) => {
    return{
        changeDay: (newDay) => { dispatch(ChangeSelectedDayCreator(newDay)) }
    }
}

const RecordingContainer = connect(mapStateToProps, mapDispatchToProps)(Recording);

export default RecordingContainer;