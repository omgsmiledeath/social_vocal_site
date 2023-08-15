import { connect } from "react-redux";
import DayView from "./DayView";
import { ChangeInputEntryStateCreator } from "../../../../Redux/RecordingReduser";

 let mapStateToProps = (state) => {
    
   let filtredSelectedDayEntries = () => {
      let newArr = [];
      state.Recording.entries.forEach( (item ) => {
         let thisday = Number(item.date.getDate());
         let stateDay = Number(state.Recording.selectedDay.getDate())
        if(thisday===stateDay)
        {
        newArr.push(item);
        }
      })
      return newArr; 
   } 

    return {
    selectedDay:state.Recording.selectedDay,
    selectedDayEntries:filtredSelectedDayEntries(),
    inputEntries:state.Recording.inputEntries,
    newEntry:state.Recording.newEntry
    }
 }

 let mapDispatchToProps = (dispatch) => {
    return {
    ChangeInputStatus: (id) => {dispatch(ChangeInputEntryStateCreator(id))}
    }
 }

const DayViewContainer = connect(mapStateToProps,mapDispatchToProps)(DayView);

export default DayViewContainer;