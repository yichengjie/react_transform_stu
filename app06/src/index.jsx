import React from 'react';
import ReactDOM from 'react-dom';
import User from './components/User.jsx' ;
import StatelessUser from './components/StatelessUser.jsx' ;
import ReduxUser from './components/ReduxUser.jsx' ;
import ReduxUser2 from './components/ReduxUser2.jsx' ;
import DateTimePicker from './components/DateTimePicker.jsx' ;


var el = document.createElement('div') ;
el.id="app";
document.body.appendChild(el) ;


function onSelect(value) {
  console.log('选择了时间：', value);
}

ReactDOM.render(
      <DateTimePicker onSelect = {onSelect} />,
 document.getElementById('app'));
