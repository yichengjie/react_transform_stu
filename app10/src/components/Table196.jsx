import React,{Component} from 'react' ;
import {Input} from 'antd' ;
import TableFooter from './TableFooter.jsx'; 

class SubTable extends Component{
    renderTbody(list){
        return list.map((item,index) =>{
            return <tr key ={item.id}>
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

    render(){
        return (
         <div className="table_layout"  style={{width:"500px"}}>
            <table>
                <thead>
                    {this.renderThead()}
                </thead>
                <tbody>
                    {this.renderTbody(this.props.list)}
                </tbody>
            </table>
            <TableFooter addTableLine = {this.props.addLine196}/>
        </div>
        ) ;
    }
}


export default SubTable ;
