import React from "react";
import DayViewContainer from "./DayView/DayViewContainer";
import ConfirmFormContainer from "./ConfirmForm/ConfirmFormContaioner";
import css from "./Recording.module.css";
const getDate = (date) => {
  let year = String(date.getFullYear());
  let month = String(date.getMonth() + 1);
  if (month.length === 1) month = `0${month}`;
  let day = String(date.getDate());
  if (day.length === 1) day = `0${day}`;
  return `${year}-${month}-${day}`;
}

const Recording = (props) => {

  let onButtonClick = (e) => props.changeDay(new Date(e.target.value));
  return (
    <div>
      <div className={css.recording_wrap}>
      <input type="date" onChange={onButtonClick} value={getDate(props.date)} />
      </div>
      <div className={css.recording_wrap_main}>
      <DayViewContainer />
      <ConfirmFormContainer />
      </div>
    </div>
  );
}

export default Recording;