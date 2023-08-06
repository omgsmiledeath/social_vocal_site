import React from "react";
import { connect } from "react-redux";
import DayView from "./DayView";
import { ChangeInputEntryStateCreator } from "../../../../Redux/RecordingReduser";

 let mapStateToProps = (state) => {
    
    return {
    selectedDay:state.Recording.selectedDay,
    selectedDayEntries:state.Recording.entries.map(item => {
        if(item.date===state.Recording.selectedDay)
        return item;
    }), 
    inputEntries:state.Recording.inputEntries
    }
 }

 let mapDispatchToProps = (dispatch) => {
    return {
    ChangeInputStatus: (id) => {dispatch(ChangeInputEntryStateCreator(id))}
    }
 }

const DayViewComponent = connect(mapStateToProps,mapDispatchToProps)(DayView);

export default DayViewComponent;