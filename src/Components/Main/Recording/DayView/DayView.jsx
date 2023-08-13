import React from "react";
import css from './DayView.module.css';
const DayView = (props) => {
    
    
    const onChangeInput=(e)=>{props.ChangeInputStatus(Number(e.target.id))};
    const inputEntries = props.inputEntries.map((item) => {
        let disabled = false;
        props.selectedDayEntries.forEach(element => {
            
            console.log(item.date.getHours())
            let elementHour = element.date.getHours();
            let itemHour = item.date.getHours();
            if (elementHour===itemHour)
            disabled = true;
        });
        return (<input type="checkbox" id={item.id} key={item.id} onChange={onChangeInput} checked={item.checked} disabled={disabled}/>  )      
    });
    
    // props.selectedDayEntries.map( (item) => {
    //     // debugger
    //     inp
    // });
    return(
        <div>
            <div className={css.wrapper}>
            {inputEntries}
            </div>
            
        </div>
    )
}

export default DayView;