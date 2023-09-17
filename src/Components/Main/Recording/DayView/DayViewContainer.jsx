import { connect } from "react-redux";
import DayView from "./DayView";
import { ChangeInputEntryStateCreator, GetFiltredEntriesAC } from "../../../../Redux/RecordingReduser";

 let mapStateToProps = (state) => {
    return {
    selectedDay:state.Recording.selectedDay,
    inputEntries:state.Recording.inputEntries,
    newEntry:state.Recording.newEntry
    }
 }

 let mapDispatchToProps = (dispatch) => {
    return {
    ChangeInputStatus: (id) => {dispatch(ChangeInputEntryStateCreator(id))},
    FiltredEntries: (day) => {dispatch(GetFiltredEntriesAC(day))}
    }
 }

const DayViewContainer = connect(mapStateToProps,mapDispatchToProps)(DayView);

export default DayViewContainer;