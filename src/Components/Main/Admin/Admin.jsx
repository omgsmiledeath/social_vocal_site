import axios from "axios";
import React from "react";

class Admin extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            itAccess : props.itAccess
        }

    }
    getAccess = () =>{  
        axios.post("http://127.0.0.1:5000/api/v1/login",{ 
            login:"Admin",
            password:"Admin"
        }).then((response)=>{
            console.log(response)
            if (response.status===201){
                this.props.getEntries(response.data)
                this.props.getAccess(true)
            }
        }) 
    } ;

    

    render(){
        if (this.state.itAccess === true){
        return(
            <div>
                <h1>This is admin page</h1>
            </div>
        )}
        else {
            return(
                <div>
                    <h1>ACCESS DENIED</h1>
                    <button content="Получить доступ" onClick={this.getAccess}/>
                </div>
            )
        }
    }
}


export default Admin;