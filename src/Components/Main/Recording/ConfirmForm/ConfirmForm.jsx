import React from "react";
import css from "./ConfirmForm.module.css";
import axios from "axios";
const ConfirmForm = (props) => {
    
    let onButtonClick = () => {   
        let entries = props.EntriesToPost(props.newEntry);
        //axios.post("http://localhost:5000/api/v1/newentry",entries).then((resp)=>console.log(resp.status)) 
        axios.post("httpL//localhost:5000/api/v1/newentry")
        .
        
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
            <div className={css['form_statuses']}>
                <ul>
                {statuses}
                </ul>
            </div>
        </div>
    );
}

export default ConfirmForm;