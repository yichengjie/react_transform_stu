import React from 'react';
import ReactDOM from 'react-dom';
import User from './components/User.jsx' ;
import StatelessUser from './components/StatelessUser.jsx' ;
import ReduxUser from './components/ReduxUser.jsx' ;
import ReduxUser2 from './components/ReduxUser2.jsx' ;
var el = document.createElement('div') ;
el.id="app";
document.body.appendChild(el) ;

ReactDOM.render(
      <ReduxUser2 />,
 document.getElementById('app'));
