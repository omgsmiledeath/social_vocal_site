import React from "react";

const Courses = (props) => {
    let courses = props.Courses.map ( item => {
        let videos = item.courseVideos.map(item => <li>{item}</li>)
        return(
        <div>
            {item.courseName}
            <ul>{videos}</ul>
        </div>)
    })
    return (
        <div>
        <h2>Hello its my Course</h2>
        {courses}
        </div>
    );
}

export default Courses;