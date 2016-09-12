import React from 'react';
import ReactDOM from 'react-dom';
import store from './stores/store.js' ;
import {Provider} from 'react-redux' ;
import AppLayout from './views/editGroup/AppLayout.jsx' ;

ReactDOM.render(
    <Provider store={store}>
      <AppLayout />
    </Provider>,
    document.getElementById('app'));
