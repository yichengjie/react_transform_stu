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
        this.setState({selectedId:"",dirty:false}) ;
    }
    handleClickTr(id){
        let oldId = this.state.selectedId ;
        let _self = this ;
        if(oldId&&oldId.length>0){//如果旧的id存在
            if(id!==oldId){
                if(this.state.dirty){//修改过
                    Modal.confirm({
                        title: '确认提示',
                        content: '放弃编辑的内容么，不保存?',
                        okText: '确定',
                        cancelText: '取消',
                        onOk() {
                            _self.clearStateInputState() ;
                            _self.updateSelectId(id) ;
                            _self.updateInputState(id) ;
                        },
                        onCancel() {},
                    });
                }else{
                    _self.updateSelectId(id) ;
                    _self.updateInputState(id) ;
                }
            }
        }else{//旧的id不存在
            _self.updateSelectId(id) ;
            _self.updateInputState(id) ;
        }
    }

    updateSelectId(id){
        if(id&&id.length>0){
            this.setState({selectedId:id,dirty:false}) ;
        }else{
            this.setState({selectedId:"",dirty:false}) ; 
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
        this.saveInputData() ;
        this.clearSelectedId() ;
        this.clearStateInputState() ;
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
