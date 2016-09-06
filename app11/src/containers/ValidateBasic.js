import ValidateBasic from '../views/ValidateBasic.jsx' ;
import {connect} from 'react-redux';
import {updateFieldValue,fetchFieldsUpdate} from  '../actions/action.js' ;

let mapState2Props = (state,ownProp) =>{
  return {
    fields:state.form,
    subTableList:state.subTableList
  } ;
};
let mapDispatch2Props = (dispatch,ownProp) => {
  return {
    onFieldsChange:(filed) =>dispatch(updateFieldValue(filed)),
    fetchFieldsUpdate:(project) => dispatch(fetchFieldsUpdate(project))
  };
} ;

export default connect(
  mapState2Props,
  mapDispatch2Props
)(ValidateBasic) ;
