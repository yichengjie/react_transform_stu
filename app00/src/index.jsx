import React from 'react';
import ReactDOM from 'react-dom';
import HelloWorld from './components/HelloWorld.jsx' ;
import NavBar from './components/NavBar.jsx' ;
import MessageGlobal from './components/MessageGlobal.jsx' ;
import ModalBasic from './components/ModalBasic.jsx' ;
import ModalSync01 from './components/ModalSync01.jsx' ;
import ModalFootCustomEdit from './components/ModalFootCustomEdit.jsx' ;
import ModalConfirm from './components/ModalConfirm.jsx' ;
import ModalConfirmPromise from './components/ModalConfirmPromise.jsx' ;
import ModalInfoTip from './components/ModalInfoTip.jsx' ;
//ModalSync01

let mountNode = document.createElement('div');
mountNode.id="app";
mountNode.style.margin = "10px 0 0 0" ;
document.body.appendChild(mountNode);
ReactDOM.render(
  <div>
    <NavBar />
    <div className="container" style ={{paddingTop:"50px"}}>
      <ModalBasic/>
      <ModalSync01/>
      <ModalFootCustomEdit/>
      <ModalConfirm/><br/>
      <ModalConfirmPromise/>
      <ModalInfoTip/>
    </div>
  </div>
  , mountNode);
