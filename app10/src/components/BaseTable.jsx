import React,{Component} from 'react' ;
import {Input} from 'antd' ;
import TableFooter from './TableFooter.jsx'; 
import './table.css' ;

class BaseTable extends Component{
    constructor(props){
        super(props) ;
        this.state ={
            selectedId:''
        } ;
        this.renderTbody = this.renderTbody.bind(this) ;
        this.renderThead = this.renderThead.bind(this) ;
        this.clearSelectedId = this.clearSelectedId.bind(this) ;
    }
    clearSelectedId(){
        this.setState({selectedId:""}) ;
    }
    handleClickTr(id){
      this.setState({selectedId:id}) ;
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
                tbname = {this.props.tbname}
                obj = {this.getSubTableObj}
                selectedId = {this.state.selectedId}
                addTableLine = {this.props.addTbLine} 
                deleteTableLine={this.props.deleteTbLine}
                clearSelectedId={this.clearSelectedId}
            />
        </div>
        ) ;
    }
}


export default BaseTable ;
