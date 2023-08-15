import React from "react";
import DayViewContainer from "./DayView/DayViewContainer";
import ConfirmFormContainer from "./ConfirmForm/ConfirmFormContaioner";
  
  const getDate = (date) => {
    let year = String(date.getFullYear());
    let month = String(date.getMonth());
    if(month.length ===1) month = `0${month}`;
    let day = String(date.getDate());
    if(day.length ===1) day = `${month}`;

    return `${year}-${month}-${day}`; 
  }

const Recording = (props) => {
    
     let onButtonClick = (e) => props.changeDay(new Date(e.target.value));
     console.log(getDate(props.date))
     

    return (
        <div>
            <div>
                <input type="date" onChange={onButtonClick} value={getDate(props.date)}/>
            </div>
            <DayViewContainer />
            <ConfirmFormContainer />
        </div>
    );
}

export default Recording;