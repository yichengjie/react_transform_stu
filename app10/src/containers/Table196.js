import Table196 from '../components/Table196.jsx' ;
import {connect} from 'react-redux';
import {addLine196,deleteLine196} from '../actions/action.js' ;

function mapState2Props (state,ownProp){
    return {
        list:state.subTableList.list196
    } ;
}

function mapDispatch2Props(dispatch,ownProp){
    return {
      addLine196:(param)=>dispatch(addLine196(param)) ,
      deleteLine196:(param)=>dispatch(deleteLine196(param))
    } ;
}
export default connect(
    mapState2Props,
    mapDispatch2Props
)(Table196) ;