import {combineReducers, legacy_createStore as createStore} from 'redux'; 
import { RecordingReducer } from './RecordingReduser';
import { CourseReducer } from './CourseReducer';


let reducers = combineReducers({Recording:RecordingReducer,Courses:CourseReducer});

let store = createStore(reducers);

export default store;