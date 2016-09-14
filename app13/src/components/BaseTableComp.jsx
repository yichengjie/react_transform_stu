import React,{Component} from 'react' ;
import {Input,Modal} from 'antd' ;
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
        this.saveTableData = this.saveTableData.bind(this) ;
        this.updateSelectId = this.updateSelectId.bind(this) ;
    }
    clearSelectedId(){
        this.setState({selectedId:""}) ;
    }
    handleClickTr(id){
        let oldId = this.state.selectedId ;
        let _self = this ;
        if(oldId&&oldId.length>0&&id!==oldId){
            Modal.confirm({
                title: '确认提示',
                content: '放弃编辑的内容么，不保存?',
                okText: '确定',
                cancelText: '取消',
                onOk() {
                   _self.updateSelectId(id) ;
                },
                onCancel() {},
            });
        }else{
             _self.updateSelectId(id) ;
        }
    }


    updateSelectId(id){
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
    saveTableData(){
        this.clearSelectedId() ;
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
                saveTableData={this.saveTableData}
            />
        </div>
        ) ;
    }
}


export default BaseTableComp ;
