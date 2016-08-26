import React from 'react' ;
import {connect} from 'react-redux';
import ContactForm from './components/ContactForm.jsx' ;

class App extends React.Component {
  render() {
    console.info(this.props) ;
    return (
      <ContactForm />
    );
  }
}

export default App;
