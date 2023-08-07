import React from "react";

const DayView = (props) => {
    
    
    const onChangeInput=(e)=>{props.ChangeInputStatus(Number(e.target.id))};
    const inputEntries = props.inputEntries.map((item) => {
        return (<input type="checkbox" id={item.id} key={item.id} onChange={onChangeInput} checked={item.checked} />  )      
    });
    
    const selectedEntries = props.selectedDayEntries.map( (item) => {
        return (<div key={item.id}>{item.id}</div>)
    });
    return(
        <div>
            <div>
            {inputEntries}
            </div>
            {selectedEntries}
        </div>
    )
}

export default DayView;