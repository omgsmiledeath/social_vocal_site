import axios from "axios";
import React from "react";

class Blog extends React.Component {
    constructor(props){
        super(props)
        //console.log(props)
    }
    componentDidMount(){
        axios.get("http://127.0.0.1:5000/api/v1/posts")
            .then((response)=> {
                if (response.status ===200){
                    this.props.getPosts(response.data)
                    console.log(response.data)
                }
            })
    }
    render() {
        return (
            <div>Hei its my blog</div>
        );
    }
}

export default Blog;