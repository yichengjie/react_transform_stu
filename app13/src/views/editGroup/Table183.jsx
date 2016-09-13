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
            let selectedFlag = this.state.selectedId === item.id ;
            return <tr key ={index}  onClick ={this.handleClickTr.bind(this,item.id)} 
                className = {selectedFlag ? "selected_td" : ""}>
                <td>
                    {selectedFlag ? <Input name ={'t18301'+index} value= {item.name1}
                     onChange={this.updateSubTableFieldValue.bind(this,'name1')}
                     className="required"/> :item.name1}
                    
                </td>
                <td>
                    {
                     selectedFlag ?<Input type ="text"
                     onChange={this.updateSubTableFieldValue.bind(this,'name2')}
                     value ={item.name2}/> : item.name2
                    }
                    
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

