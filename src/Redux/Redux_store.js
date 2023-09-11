import {combineReducers, legacy_createStore as createStore} from 'redux'; 
import { RecordingReducer } from './RecordingReduser';
import { CourseReducer } from './CourseReducer';
import { AdminReducer } from './AdminReducer';

let reducers = combineReducers({Recording:RecordingReducer,Courses:CourseReducer,Admin:AdminReducer});

let store = createStore(reducers);

export default store;