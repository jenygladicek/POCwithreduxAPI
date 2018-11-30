import {combineReducers,createStore} from 'redux';

import ListReducer from './reducers/ListReducer';
import SearchTextReducer from './reducers/SearchTextReducer';
import FemaleReducer from './reducers/FemaleReducer';
import MaleReducer from './reducers/MaleReducer';

export default createStore(combineReducers({ListReducer,SearchTextReducer,FemaleReducer,MaleReducer}));