import {combineReducers,configureStore, legacy_createStore as createStore} from 'redux'; 
import { RecordingReducer } from './RecordingReduser';

let reducers = combineReducers(RecordingReducer);
let store = createStore(RecordingReducer);

export default store;