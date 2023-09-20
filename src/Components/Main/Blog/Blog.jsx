import axios from "axios";
import React from "react";

class Blog extends React.Component {
    
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
        let PostList = () => {
            debugger
            this.props.posts.map ( item => {
                return <div>
                    <h6>{item.titul}</h6>
                    <p>{item.textPost}</p>
                    <text src={item.videourl} />
                </div>
            })
        }
        return (
            <div>{PostList()}</div>
            
        );
    }
}

export default Blog;