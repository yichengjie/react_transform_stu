import React from 'react';
import ReactDOM from 'react-dom';
import HelloWorld from './components/HelloWorld.jsx' ;
import NavBar from './components/NavBar.jsx' ;

let el = document.createElement('div');
el.id="app";
el.style.margin = "10px 0 0 0" ;
document.body.appendChild(el);
ReactDOM.render(<NavBar />, el);
