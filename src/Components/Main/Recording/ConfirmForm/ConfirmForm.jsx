import React from "react";
const ConfirmForm = (props) => {
    
    let onButtonClick = () => {
         props.addEntry() 
        };
    let onOwnerChange =(e) => props.changeOwner(e.target.value);
    let onPhoneChange =(e) => props.changePhone(e.target.value);
    let statuses = props.newEntry.statusText.map((item) => <li>{item}</li>)
    return (
        <div>
            <div>
                <span>Ваше имя(название команды)</span><input onChange={onOwnerChange} value={props.newEntry.owner}/>
            </div>
            <div>
                <span>Контактный номер телефона</span> <input type="tel" value={props.newEntry.phone} onChange={onPhoneChange}/>
            </div>
            
            <button onClick={onButtonClick}>Записаться</button>
            <ul>
            {statuses}
            </ul>
        </div>
    );
}

export default ConfirmForm;