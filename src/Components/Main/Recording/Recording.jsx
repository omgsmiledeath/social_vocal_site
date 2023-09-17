import React from "react";
import DayViewContainer from "./DayView/DayViewContainer";
import ConfirmFormContainer from "./ConfirmForm/ConfirmFormContaioner";
import css from "./Recording.module.css";
import axios from "axios";



class Recording extends React.Component {
  constructor(props) {
    super(props);
    // axios.get("http://localhost:5000/api/v1/entries")
    //     .then((resp)=>{
    //         let tempres = resp.data.map(item => {
    //           let newitem = {id:item[0],date:new Date(item[1]),status:item[2],owner:item[3],desc:item[4]};

    //         return newitem;
    // })
    // props.getEntries(tempres);
    // this.state = this.setState({
    //   entries:tempres
    // });}) 

    console.log(props)
  }

  componentDidMount() {
    axios.get("http://localhost:5000/api/v1/entries")
      .then((resp) => {
        let tempres = resp.data.map(item => {
          let newitem = { id: item[0], date: new Date(item[1]), status: item[2], owner: item[3], desc: item[4] };

          return newitem;
        })
        this.props.getEntries(tempres);
        ;
      })
  }
  componentWillUnmount(){
    
    this.props.changeDay(new Date(Date.now()))
  }
  getDate = (date) => {
    let year = String(date.getFullYear());
    let month = String(date.getMonth() + 1);
    if (month.length === 1) month = `0${month}`;
    let day = String(date.getDate());
    if (day.length === 1) day = `0${day}`;
    return `${year}-${month}-${day}`;
  }

  onButtonClick = (e) => this.props.changeDay(new Date(e.target.value));

  render() {


    return (<div>
      <div className={css.recording_wrap}>
        <input type="date" onChange={this.onButtonClick} value={this.getDate(this.props.date)} />
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