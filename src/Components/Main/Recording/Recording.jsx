import React from "react";
import DayViewContainer from "./DayView/DayViewContainer";
import ConfirmFormContainer from "./ConfirmForm/ConfirmFormContaioner";
  
  const getDate = (date) => {
    let year = String(date.getFullYear());
    let month = String(date.getMonth()+1);
    console.log(month)
    if(month.length ===1) month = `0${month}`;
    let day = String(date.getDate());
    console.log(day)
    if(day.length ===1) day = `0${day}`;
    console.log(month)
    console.log(day)
    return `${year}-${month}-${day}`; 
  }

const Recording = (props) => {
    
     let onButtonClick = (e) => props.changeDay(new Date(e.target.value));
     console.log(getDate(props.date))
     console.log(props.date)

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