import React from 'react';
import ReactDOM,{ render, } from 'react-dom';
import SimpleForm from './components/SimpleForm.jsx' ;


var el = document.createElement('div') ;
el.id="app";
document.body.appendChild(el) ;

ReactDOM.render(
  <SimpleForm />,
  document.getElementById('app'));
