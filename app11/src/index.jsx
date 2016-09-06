import React from 'react';
import ReactDOM from 'react-dom';
import AppLayout from './views/query/AppLayout.jsx' ;
import store from './stores/store.js' ;
import {Provider} from 'react-redux' ;
var mountNode = document.getElementById('app') ;

ReactDOM.render(
    <Provider store={store}>
      <AppLayout />
    </Provider>,
    mountNode);
