import React from "react";

const ConfirmForm = (props) => {
    
    let onButtonClick = ()=> props.addEntry();
    
    return (
        <div>
            <button onClick={onButtonClick} />
        </div>
    );
}

export default ConfirmForm;