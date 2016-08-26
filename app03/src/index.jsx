import React from 'react';
import ReactDOM,{ render, } from 'react-dom';
import { createStore, combineReducers, } from 'redux';
import { Provider, } from 'react-redux';
import { reducer as formReducer, } from 'redux-form';
import SimpleForm from './components/SimpleForm.jsx';

const reducer = combineReducers({
  form: formReducer,
});

function configureStore(initialState) {
  return createStore(reducer, initialState);
}

const store = configureStore({});


var el = document.createElement('div') ;
el.id="app";
document.body.appendChild(el) ;

ReactDOM.render(
    <Provider store={store}>
      <SimpleForm />
    </Provider>,
 document.getElementById('app'));
