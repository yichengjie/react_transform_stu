import React,{Component} from 'react' ;
import {Input} from 'antd' ;
import TableFooterComp from './TableFooterComp.jsx'; 
import '../styles/table.css' ;

class BaseTableComp extends Component{
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
        if(id&&id.length>0){
            this.setState({selectedId:id}) ;
        }else{
            this.setState({selectedId:""}) ; 
        }
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
         <div className="table_layout"  style={{width:"100%"}}>
            <table>
                <thead>
                    {this.renderThead()}
                </thead>
                <tbody>
                    {this.renderTbody(this.props.list)}
                </tbody>
            </table>
            <TableFooterComp 
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


export default BaseTableComp ;
