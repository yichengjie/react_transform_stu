 import {createStore, combineReducers} from 'redux';
 import {reducer as formReducer} from 'redux-form';
const reducers = {
  form: formReducer
}
const reducer = combineReducers(reducers);
//const store = createStore(reducer);
let store = createStore(reducer, window.devToolsExtension && window.devToolsExtension());
export default store;
