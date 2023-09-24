import axios from "axios";
import React from "react";
import { CONFIRMED_STATUS, NEW_ENTRY_STATUS, NOT_APPROVED_STATUS,REJECTED_STATUS } from "../../../Redux/AdminReducer";

class Admin extends React.Component {
    constructor(props) {
        super(props);
        if (props.itAccess === true) {
            this.getAccessButton();
        }
    }
    getAccessButton = () => {
        axios.post("http://127.0.0.1:5000/api/v1/login", {
            login: "Admin",
            password: "Admin"
        }).then((response) => {
            console.log(response)
            if (response.status === 201) {
                let tempres = response.data.map(item => {
                    let newitem = { id: item[0], date: new Date(item[1]), status: item[2], owner: item[3], desc: item[4] };
                    return newitem;
                })
                this.props.getEntriesAdmin(tempres)
                this.props.getAccess(true)
            }
        })
    };
    getOptions =(status) => {
        switch (status) {
            case NEW_ENTRY_STATUS:
        return (<select>
            <option >{CONFIRMED_STATUS}</option>
            <option >{NOT_APPROVED_STATUS}</option>
            <option selected>{NEW_ENTRY_STATUS}</option>
            <option >{REJECTED_STATUS}</option>
        </select>)
        case CONFIRMED_STATUS:
            return (<select>
                <option selected>{CONFIRMED_STATUS}</option>
                <option >{NOT_APPROVED_STATUS}</option>
                <option >{NEW_ENTRY_STATUS}</option>
                <option >{REJECTED_STATUS}</option>
            </select>)
        case NOT_APPROVED_STATUS:
            return (<select>
                <option >{CONFIRMED_STATUS}</option>
                <option selected>{NOT_APPROVED_STATUS}</option>
                <option >{NEW_ENTRY_STATUS}</option>
                <option >{REJECTED_STATUS}</option>
            </select>)
        default :
        return (<select>
            <option >{CONFIRMED_STATUS}</option>
            <option >{NOT_APPROVED_STATUS}</option>
            <option >{NEW_ENTRY_STATUS}</option>
            <option >{REJECTED_STATUS}</option>
        </select>)
        }
    }
    printListEntries = () => {
        let tempEntries = this.props.entries.map((el) => {
            return (<li key={el.id}>
                {el.date.getDate()}- {el.owner}
                {this.getOptions(el.status)}
            </li>)
        })
        console.log(tempEntries)
        return (
            <ul>{tempEntries}</ul>
        )
    }



    render() {
        if (this.props.itAccess === true) {
            return (
                <div>
                    <h1>This is admin page</h1>

                    {this.printListEntries()}

                </div>
            )
        }
        else {
            return (
                <div>
                    <h1>ACCESS DENIED</h1>
                    <button content="Получить доступ" onClick={this.getAccessButton} />
                </div>
            )
        }
    }
}


export default Admin;