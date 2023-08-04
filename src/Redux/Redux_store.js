import {combineReducers, legacy_createStore as createStore} from 'redux'; 
import { RecordingReducer } from './RecordingReduser';

let reducers = combineReducers(RecordingReducer);
let store = createStore(reducers);

export default store;