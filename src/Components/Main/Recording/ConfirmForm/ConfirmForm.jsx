import React from "react";
import css from "./ConfirmForm.module.css";
import { nanoid } from "nanoid";
import axios from "axios";
const ConfirmForm = (props) => {
    let onButtonClick = () => {
        let entries = props.EntriesToPost(props.newEntry);
        // let data = JSON.stringify({
        //     "entries": [...entries]
        // })
        // var myHeaders = new Headers();
        // myHeaders.append("Content-Type", "application/json");

        // var requestOptions = {
        //     method: 'POST',
        //     headers: myHeaders,
        //     body: data,
        //     redirect: 'follow'
        // };

        // fetch("http://localhost:5000/api/v1/newentry", requestOptions)
        //     .then(response => {
        //         axios.get("http://localhost:5000/api/v1/entries")
        //             .then((resp) => {
        //                 let tempres = resp.data.map(item => {
        //                     let newitem = { id: item[0], date: new Date(item[1]), status: item[2], owner: item[3], desc: item[4] };
        //                     return newitem;
        //                 })
        //                 props.addEntry()
        //                 props.getEntries(tempres);
        //             })
        //     })
        //     .then((data) => console.log(data))
        //     .catch(error => console.log('error', error));
        axios.post("http://127.0.0.1:5000/api/v1/newentry",{
            "entries": [...entries]
        })
        .then((response)=>{
            console.log(response.data)
            let tempres = response.data.map(item => {
                let newitem = { id: item[0], date: new Date(item[1]), status: item[2], owner: item[3], desc: item[4] };
      
                return newitem;
              })
            props.getEntries(tempres)
        })
    };


    let onOwnerChange = (e) => props.changeOwner(e.target.value);
    let onPhoneChange = (e) => props.changePhone(e.target.value);
    let statuses = props.newEntry.statusText.map((item) => <li key={nanoid()}>{item.text}</li>)
    return (
        <div className={css['form_wrapp']}>
            <div>
                <span>Ваше имя(название команды)</span><input onChange={onOwnerChange} value={props.newEntry.owner} />
            </div>
            <div>
                <span>Контактный номер телефона</span> <input type="tel" value={props.newEntry.phone} onChange={onPhoneChange} />
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