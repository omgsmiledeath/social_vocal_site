import React from "react";
import css from "./ConfirmForm.module.css";
const ConfirmForm = (props) => {
    
    let onButtonClick = () => {
         props.addEntry() 
        };
    let onOwnerChange =(e) => props.changeOwner(e.target.value);
    let onPhoneChange =(e) => props.changePhone(e.target.value);
    let statuses = props.newEntry.statusText.map((item) => <li>{item.text}</li>)
    return (
        <div className={css['form_wrapp']}>
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