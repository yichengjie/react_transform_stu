import ValidateBasic from '../components/ValidateBasic.jsx' ;
import {connect} from 'react-redux';
import {updateFieldValue,resetAllFileds} from  '../actions/action.js' ;

let mapState2Props = (state,ownProp) =>{
  return {
    formData:state.formData,
  } ;
};
let mapDispatch2Props = (dispatch,ownProp) => {
  return {
    updateFieldValue:(param) => dispatch(updateFieldValue(param)),
    resetAllFileds:()=> dispatch(resetAllFileds())
  };
} ;

export default connect(
  mapState2Props,
  mapDispatch2Props
)(ValidateBasic) ;
