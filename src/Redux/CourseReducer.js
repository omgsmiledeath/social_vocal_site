


let initialState = {
    Courses:[{
        id:1,
        courseName:"Вокал вокал",
        courseVideos:["видео","Видео","видео","Видео","видео","Видео","видео","Видео"]
    }]     
}

export const CourseReducer = (state=initialState,action) => {
    switch (action.type){ 
    default:
        return state;
    }
}