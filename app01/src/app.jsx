import React from 'react' ;
import {connect} from 'react-redux';
import Form from './components/Form.jsx' ;


class App extends React.Component {
  render() {
    return (
      <Form {...this.props.formData} dispatch={this.props.dispatch} />
    );
  }
}

let mapState2Props = (state,ownProp) =>{
  return {
    formData:state.formData
  } ;
};

export default connect(
  mapState2Props
)(App) ;
