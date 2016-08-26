import React from 'react';
import ReactDOM,{ render, } from 'react-dom';
import SimpleForm from './components/SimpleForm.jsx' ;
import { Provider, } from 'react-redux';
import store from './stores/store.js' ;


var el = document.createElement('div') ;
el.id="app";
document.body.appendChild(el) ;

ReactDOM.render(
    <Provider store={store}>
      <SimpleForm />
    </Provider>,
 document.getElementById('app'));
