

import {combineReducers} from 'redux';
import counterReducer from './counter.reducer';

const root = combineReducers({counter: counterReducer});
export default root;