import { connect } from "react-redux";
import Blog from "./Blog";
import { GetPostsAC } from "../../../Redux/BlogReducer";

let mapStateToProps = (state) => {
    return {
        posts : state.Blog.posts
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        getPosts : (posts) => dispatch(GetPostsAC(posts))
    }
}
const BlogContainer = connect(mapStateToProps,mapDispatchToProps)(Blog);

export default BlogContainer;