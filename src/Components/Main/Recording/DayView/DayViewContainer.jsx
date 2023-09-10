import { connect } from "react-redux";
import DayView from "./DayView";
import { ChangeInputEntryStateCreator } from "../../../../Redux/RecordingReduser";

 let mapStateToProps = (state) => {
   let filtredSelectedDayEntries = () => {
      let newArr = [];
      state.Recording.entries.forEach( (item ) => {
         debugger
         let thisday = Number(item.date.getDate());
         let stateDay = Number(state.Recording.selectedDay.getDate())
        if(thisday===stateDay)
        {
        newArr.push(item);
        }
      })
      let newInputEntries = state.Recording.inputEntries.map((item) => {
         newArr.forEach(element => {
             let elementHour = element.date.getHours();
             let itemHour = item.date.getHours();
             if (elementHour===itemHour)
             item.disabled = true;
         });
         return item;
      });
      return newInputEntries; 
}

    return {
    selectedDay:state.Recording.selectedDay,
    inputEntries:filtredSelectedDayEntries(),
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