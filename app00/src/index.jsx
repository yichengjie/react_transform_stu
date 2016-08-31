import React from 'react';
import ReactDOM from 'react-dom';
import HelloWorld from './components/HelloWorld.jsx' ;

let el = document.createElement('div');
el.id="app";
el.style.margin = "50px 0 0 50px" ;
document.body.appendChild(el);
ReactDOM.render(<HelloWorld />, el);
