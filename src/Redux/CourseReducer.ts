


let initialState = {
    Courses:[{
        id:1,
        courseName:"Вокал вокал",
        courseVideos:["видео1","Видео2","видео3","Видео4","видео5","Видео6","видео7","Видео8"]
    }]     
}

export const CourseReducer = (state=initialState,action:any) => {
    switch (action.type){ 
    default:
        return state;
    }
}