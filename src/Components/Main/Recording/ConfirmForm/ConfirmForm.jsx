import React from "react";
const ConfirmForm = (props) => {
    
    let onButtonClick = () => {
         props.addEntry() 
        };
    let onOwnerChange =(e) => props.changeOwner(e.target.value);
    return (
        <div>
            <input onChange={onOwnerChange} value={props.newEntry.owner}/>
            <button onClick={onButtonClick} />
            
        </div>
    );
}

export default ConfirmForm;