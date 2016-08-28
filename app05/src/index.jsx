import React from 'react';
import ReactDOM,{ render, } from 'react-dom';
import SimpleForm from './components/SimpleForm.jsx' ;
import SetFieldsValue from './components/SetFieldsValue.jsx' ;
import ValidateFirst from './components/ValidateFirst.jsx' ;
import AsyncInit from './components/AsyncInit.jsx' ;
import DataBinding from './components/DataBinding.jsx' ;
import DataBindingForm from './components/DataBindingForm.jsx' ;
import Dynamic from './components/Dynamic.jsx' ;

var el = document.createElement('div') ;
el.id="app";
document.body.appendChild(el) ;

ReactDOM.render(
  <SimpleForm />,
  document.getElementById('app'));
