import React from 'react' ;
import {connect} from 'react-redux';
import ContactForm from './components/ContactForm.jsx' ;


class App extends React.Component {
  render() {
    return (
      <ContactForm />
    );
  }
}

let mapState2Props = (state,ownProp) =>{
  return {
    form:state.form
  } ;
};

export default connect(
  mapState2Props
)(App) ;
