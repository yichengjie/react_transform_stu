import Table196 from '../views/Table196.jsx' ;
import {connect} from 'react-redux';
import {addTbLine,deleteTbLine,updateSubTableFieldValue} from '../actions/action.js' ;

function mapState2Props (state,ownProp){
    return {
        list:state.subTableList.list196
    } ;
}

function mapDispatch2Props(dispatch,ownProp){
    return {
      addTbLine:(param)=>dispatch(addTbLine(param)) ,
      deleteTbLine:(param)=>dispatch(deleteTbLine(param)),
      updateSubTableFieldValue:(param)=>dispatch(updateSubTableFieldValue(param))
    } ;
}
export default connect(
    mapState2Props,
    mapDispatch2Props
)(Table196) ;