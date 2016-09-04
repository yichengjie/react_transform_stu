import Table196 from '../components/Table196.jsx' ;
import {connect} from 'react-redux';
import {addLine196,deleteLine196} from '../actions/action.js' ;

function mapState2Props (state,ownProp){
    return {
        list:state.subTableList
    } ;
}

function mapDispatch2Props(dispatch,ownProp){
    return {
      addLine196:()=>dispatch(addLine196()) ,
      deleteLine196:(id)=>dispatch(deleteLine196(id))
    } ;
}
export default connect(
    mapState2Props,
    mapDispatch2Props
)(Table196) ;