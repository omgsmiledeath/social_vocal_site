import axios from "axios";
import React from "react";

class Admin extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            itAccess: props.itAccess,
            entries: props.entries
        }

    }
    getAccess = () => {
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
                this.props.getEntries(tempres)
                this.props.getAccess(true)
                this.setState((prevState, props) => {
                    console.log(prevState)
                    return {
                        itAccess: true,
                        entries: props.entries
                    }
                })
            }
        })
    };
    printListEntries = () => {
        let tempEntries = this.state.entries.map((el) => (<li key={el.id}>{el.date.getDate()}- {el.owner}</li>))
        console.log(tempEntries)
        return (
            <ul>{tempEntries}</ul>
        )
    }



    render() {
        if (this.state.itAccess === true) {
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
                    <button content="Получить доступ" onClick={this.getAccess} />
                </div>
            )
        }
    }
}


export default Admin;