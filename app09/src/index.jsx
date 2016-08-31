import React from 'react';
import ReactDOM from 'react-dom';
import App from './app.jsx' ;
//import znCH from 'antd/lib/locale-provider/en_US';
import store from './stores/store.js' ;
import {Provider} from 'react-redux' ;

 var el = document.createElement('div') ;
 el.id="app";
 el.style.margin = "80px 0 0 50px" ;
 document.body.appendChild(el) ;

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    el);
