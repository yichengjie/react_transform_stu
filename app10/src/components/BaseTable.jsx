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
        this.updateSubTableFieldValue = this.updateSubTableFieldValue.bind(this) ;
    }
    clearSelectedId(){
        this.setState({selectedId:""}) ;
    }
    handleClickTr(id){
      this.setState({selectedId:id}) ;
    }
    updateSubTableFieldValue(name,event){
        let tbname = this.props.tbname ;
        let id = this.state.selectedId ;
        let value = event.target.value ;
        let obj = {tbname,id,name,value} ;
        this.props.updateSubTableFieldValue(obj) ;
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
                obj = {this.getSubTableObj()}
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
