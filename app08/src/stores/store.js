import { createStore } from 'redux' ;
//import formData from '../reducers/formData.js' ;
// let reducer = combineReducers({
// 	 formData
// }) ;
import reducer  from '../reducers/ohter.js' ;
let store = createStore(reducer,window.devToolsExtension && window.devToolsExtension()) ;
export default store;
