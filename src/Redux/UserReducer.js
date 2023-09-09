//Константы
const USER_TRY_TO_LOGIN = 'USER_TRY_TO_LOGIN';


//ACTRION CREATORS
export const TryToLoginAC = (options) => ({type:USER_TRY_TO_LOGIN,options})

let initialState = {
    username:'',
    token:''
}

const UserReducer = (state=initialState,action){
    switch (action.type){
        case USER_TRY_TO_LOGIN:
            return {
                username:action.options.username,
                token:action.options.token
            }
        default:
        return initialState;
    }
}