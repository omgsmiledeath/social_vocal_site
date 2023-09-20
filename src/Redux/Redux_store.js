import {combineReducers, legacy_createStore as createStore} from 'redux'; 
import { RecordingReducer } from './RecordingReduser';
import { CourseReducer } from './CourseReducer';
import { BlogReducer } from './BlogReducer';


let reducers = combineReducers({Recording:RecordingReducer,Courses:CourseReducer,Blog:BlogReducer});

let store = createStore(reducers);

export default store;