import { combineReducers, createStore } from 'redux' ;
import formData from '../reducers/FormReducer.js' ;
let reducer = combineReducers({
	 formData
}) ;
//let store = createStore(reducer) ;
let store = createStore(reducer, window.devToolsExtension && window.devToolsExtension());
export default store;
