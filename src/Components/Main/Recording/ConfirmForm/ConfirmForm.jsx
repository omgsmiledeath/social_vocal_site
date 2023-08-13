import React from "react";

const ConfirmForm = (props) => {
    let count = 0;
    let onButtonClick = () => {
        count++;
         props.addEntry() 
        };

    return (
        <div>
            <button onClick={onButtonClick} />
            {count}
        </div>
    );
}

export default ConfirmForm;