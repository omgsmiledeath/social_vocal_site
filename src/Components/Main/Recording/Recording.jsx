import React from "react";
import DayViewContainer from "./DayView/DayViewContainer";
import ConfirmFormContainer from "./ConfirmForm/ConfirmFormContaioner";

const Recording = (props) => {
    
     let onButtonClick = (e) => props.changeDay(new Date(e.target.value));
    return (
        <div>
            <div>
                <input type="date" onChange={onButtonClick}/>
            </div>
            <DayViewContainer />
            <ConfirmFormContainer />
        </div>
    );
}

export default Recording;