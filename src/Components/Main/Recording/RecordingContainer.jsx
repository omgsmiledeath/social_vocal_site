import React from "react";
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
        ChangeDay: (newDay) => { dispatch(ChangeSelectedDayCreator(newDay)) }
    }
}

const RecordingContainer = connect(mapStateToProps, mapDispatchToProps)(Recording);

export default RecordingContainer;