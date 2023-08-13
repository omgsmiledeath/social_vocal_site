import React from "react";

const DayView = (props) => {
    
    
    const onChangeInput=(e)=>{props.ChangeInputStatus(Number(e.target.id))};
    const inputEntries = props.inputEntries.map((item) => {
        let disabled = false;
        debugger
        props.selectedDayEntries.forEach(element => {
            if(item.date.getHours()===element.date.getHours())
            disabled=true;
        });
        return (<input type="checkbox" id={item.id} key={item.id} onChange={onChangeInput} checked={item.checked} disabled={disabled}/>  )      
    });
    
    // props.selectedDayEntries.map( (item) => {
    //     // debugger
    //     inp
    // });
    return(
        <div>
            <div>
            {inputEntries}
            </div>
            
        </div>
    )
}

export default DayView;