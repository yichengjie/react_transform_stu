import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, connect } from 'react-redux';
import store  from './stores/FormStore.js' ;
import App from './app.jsx' ;

class Root extends React.Component {
  render() {
    return (
      <Provider store={store}>
         <App />
      </Provider>
    );
  }
}
var el = document.createElement('div') ;
el.id="app";
document.body.appendChild(el) ;

ReactDOM.render(<Root />, document.getElementById('app'));
