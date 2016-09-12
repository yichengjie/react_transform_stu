import React,{Component} from 'react' ;
import {Input} from 'antd' ;
import BaseTableComp from 'src/components/BaseTableComp.jsx' ;

class Table183 extends BaseTableComp{
    constructor(props){
        super(props) ;
    }
    getSubTableObj (){
        return {"name1":'yicj',"name2":'2'}
    }
    renderTbody(list){
        return list.map((item,index) =>{
            return <tr key ={item.id}  onClick ={this.handleClickTr.bind(this,item.id)} 
                className = {this.state.selectedId === item.id ? "selected_td" : ""}>
                <td>
                    <Input  /> 
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

export default Table183 ;
