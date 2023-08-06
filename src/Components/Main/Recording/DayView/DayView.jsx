import React from "react";

const DayView = (props) => {
    
    
    const onChangeInput=(e)=>{props.ChangeInputStatus(Number(e.target.id))};
    const inputEntries = props.inputEntries.map((item) => {
        return (<input type="checkbox" id={item.id} key={item.id} onChange={onChangeInput} value={item.checked} />  )      
    });

    return(
        <div>
            <p>11</p>
            <div>
            {inputEntries}
            </div>
        </div>
    )
}

export default DayView;