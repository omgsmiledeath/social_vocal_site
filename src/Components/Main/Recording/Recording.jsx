import React from "react";
import DayViewContainer from "./DayView/DayViewContainer";
import ConfirmFormContainer from "./ConfirmForm/ConfirmFormContaioner";
import css from "./Recording.module.css";
import axios from "axios";

const getDate = (date) => {
  let year = String(date.getFullYear());
  let month = String(date.getMonth() + 1);
  if (month.length === 1) month = `0${month}`;
  let day = String(date.getDate());
  if (day.length === 1) day = `0${day}`;
  return `${year}-${month}-${day}`;
}

class Recording extends React.Component{
  constructor (props){
    super(props);
    axios.get("http://127.0.0.1:5000/api/v1/entries")
        .then((resp)=>{
            let tempres = resp.data.map(item => {
            item.date = Date(item.date);
            return item;
    })
    props.getEntries(tempres);}) 
}
render(){
  let onButtonClick = (e) => this.props.changeDay(new Date(e.target.value));
  return(<div>
      <div className={css.recording_wrap}>
      <input type="date" onChange={onButtonClick} value={getDate(this.props.date)} />
      </div>
      <div className={css.recording_wrap_main}>
      <DayViewContainer />
      <ConfirmFormContainer />
      </div>
    </div>
  )
}
}

export default Recording;