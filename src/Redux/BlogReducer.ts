// //Константы
// const GET_POSTS = "GET_POSTS";
// //AC
// export const GetPostsAC = (posts) => ({type:GET_POSTS,value:posts})
// //Методы


// const initialState = {
//     posts:[],
//     isAccess:false
// }


// export const BlogReducer = (state=initialState,action) => {
//     switch (action.type) {
//         case GET_POSTS:
//         return {
//             posts:action.value,
//             isAccess:state.isAccess
//         }
//         default:
//         return state;
//     }
// }