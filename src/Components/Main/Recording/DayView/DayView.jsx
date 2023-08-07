import React from "react";

const DayView = (props) => {
    
    
    const onChangeInput=(e)=>{props.ChangeInputStatus(Number(e.target.id))};
    const inputEntries = props.inputEntries.map((item) => {
        return (<input type="checkbox" id={item.id} key={item.id} onChange={onChangeInput} checked={item.checked} />  )      
    });
   
    return(
        <div>
            <div>
            {inputEntries}
            </div>
            {props.selectedDayEntries}
        </div>
    )
}

export default DayView;