import { connect } from "react-redux";
import Courses from "./Courses";

let mapStateToProps = (state) => {
    return {
    Courses:state.Courses.Courses
    }
}

let mapDispatchToProps = (dispatch) => {

}

const CoursesContainer = connect(mapStateToProps,mapDispatchToProps)(Courses);

export default CoursesContainer;