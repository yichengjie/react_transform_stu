import ValidateBasic from '../components/ValidateBasic.jsx' ;
import {connect} from 'react-redux';
import {updateFieldValue} from  '../actions/action.js' ;

let mapState2Props = (state,ownProp) =>{
  return {
    fields:state.form,
  } ;
};
let mapDispatch2Props = (dispatch,ownProp) => {
  return {
    onFieldsChange:(filed) =>{
      dispatch(updateFieldValue(filed))
      //dispatch({type:'PROJECT_FORM_CHANGE',payload:filed}) ;
    }
  };
} ;

export default connect(
  mapState2Props,
  mapDispatch2Props
)(ValidateBasic) ;
