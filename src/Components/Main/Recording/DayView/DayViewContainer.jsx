import React from "react";
import { connect } from "react-redux";
import DayView from "./DayView";
import { ChangeInputEntryStateCreator } from "../../../../Redux/RecordingReduser";

 let mapStateToProps = (state) => {
    
   let filtredSelectedDayEntries = () => {
      let newArr = [];
      state.Recording.entries.forEach( (item ) => {
         let day = Number(item.date.getDate());
      console.log(day==state.Recording.selectedDay)
        if(day===state.Recording.selectedDay)
        {
        newArr.push(item);
        }
      })
      return newArr; 
   } 

    return {
    selectedDay:state.Recording.selectedDay,
    selectedDayEntries:filtredSelectedDayEntries(),
    inputEntries:state.Recording.inputEntries
    }
 }

 let mapDispatchToProps = (dispatch) => {
    return {
    ChangeInputStatus: (id) => {dispatch(ChangeInputEntryStateCreator(id))}
    }
 }

const DayViewContainer = connect(mapStateToProps,mapDispatchToProps)(DayView);

export default DayViewContainer;