import React from 'react';
import ReactDOM from 'react-dom';
import ValidateBasic from './components/ValidateBasic.jsx' ;

var el = document.createElement('div') ;
el.id="app";
el.style = "margin:80px 0 0 50px" ;
document.body.appendChild(el) ;

ReactDOM.render(
      <ValidateBasic />,
 document.getElementById('app'));
