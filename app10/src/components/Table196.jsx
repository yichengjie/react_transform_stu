import React,{Component} from 'react' ;
import {Input} from 'antd' ;
import TableFooter from './TableFooter.jsx'; 

class SubTable extends Component{

    constructor(props){
        super(props) ;
        this.state ={
            selectedId:''
        } ;
        this.renderTbody = this.renderTbody.bind(this) ;
    }
    handleClickTr(id){
        this.setState({selectedId:id}) ;
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
            <TableFooter 
                addTableLine = {this.props.addLine196} 
                deleteTableLine={this.props.deleteLine196.bind(this,this.state.selectedId)}
            />
        </div>
        ) ;
    }
}


export default SubTable ;
