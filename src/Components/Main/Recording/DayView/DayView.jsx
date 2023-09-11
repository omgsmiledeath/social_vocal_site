import React from "react";
import css from './DayView.module.css';
const DayView = (props) => {
    
    
    const onChangeInput=(e)=>{props.ChangeInputStatus(Number(e.target.id))};
    const inputEntries = props.inputEntries.map(item => {
        return (<label key={item.id} className={css['checkbox_btn']}>
        <input type="checkbox" 
        key={item.id} id={item.id} onChange={onChangeInput} 
        checked={item.checked} disabled={item.disabled}/>
        <span>{item.date.getHours()}:00</span>
        </label>  
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