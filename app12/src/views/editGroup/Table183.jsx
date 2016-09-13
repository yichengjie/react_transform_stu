import React,{Component} from 'react' ;
import {Input} from 'antd' ;
import BaseTableComp from 'src/components/BaseTableComp.jsx' ;
import {connect} from 'react-redux';
import {addTbLine,deleteTbLine,updateSubTableFieldValue} from 'src/actions/action.js' ;

class Table183 extends BaseTableComp{
    constructor(props){
        super(props) ;
    }
    getSubTableObj (){
        return {"name1":'yicj',"name2":'2'}
    }
    renderTbody(list){
        return list.map((item,index) =>{
            return <tr key ={index}  onClick ={this.handleClickTr.bind(this,item.id)} 
                className = {this.state.selectedId === item.id ? "selected_td" : ""}>
                <td>
                    <Input name ={'t18301'+index} className="required"/> 
                </td>
                <td>
                    <Input type ="text"/>
                </td>
            </tr>
        }) ;
    }
    renderThead(){
        return (
            <tr>
                <th width="100">发布类型</th>
                <th width="100">发布对象</th>
            </tr>
       );
    }
}


function mapState2Props (state,ownProp){
    return {
        list:state.subTableList.list183
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
)(Table183) ;

