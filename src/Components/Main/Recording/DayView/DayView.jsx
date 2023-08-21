import React from "react";
import css from './DayView.module.css';
const DayView = (props) => {
    
    
    const onChangeInput=(e)=>{props.ChangeInputStatus(Number(e.target.id))};
    const inputEntries = props.inputEntries.map(item => {
        return (
        <div key={item.id}>
        <span>{item.date.getHours()}:00</span><input type="checkbox" id={item.id} key={item.id} onChange={onChangeInput} 
        checked={item.checked} disabled={item.disabled}/>

        </div>  
        );      
    });
    
    return(
        <div>
            <div className={css.wrapper}>
            {inputEntries}
            </div>
            
        </div>
    )
}

export default DayView;