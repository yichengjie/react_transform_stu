import React,{Component} from 'react' ;
import {Input} from 'antd' ;
import BaseTable from '../components/BaseTable.jsx' ;

class Table196 extends BaseTable{
    constructor(props){
        super(props) ;
    }

    getSubTableObj (){
        return {name:'yicj'}
    }
    
    renderTbody(list){
        return list.map((item,index) =>{
            return <tr key ={item.id}  onClick ={this.handleClickTr.bind(this,item.id)} 
                className = {this.state.selectedId === item.id ? "selected_td" : ""}>
                <td><Input name ={item.id + '1'} type ="text" className="required"/></td>
                <td><Input type ="text"/></td>
                <td><Input type ="text"/></td>
                <td><Input name ={item.id + '4'} type ="text" className="required"/></td>
            </tr>
        }) ;
    }
    renderThead(){
        return (
            <tr>
                <th width="100">市场方RBD</th>
                <th width="100">承运方RBD</th>
                <th width="100">市场方服务等级</th>
                <th width="100">承运方服务等级</th>
            </tr>
       );
    }
}

export default Table196 ;
