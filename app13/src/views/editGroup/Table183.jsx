import React,{Component} from 'react' ;
import {Input} from 'antd' ;
import BaseTableComp from 'src/components/BaseTableComp.jsx' ;
import {connect} from 'react-redux';
import {addTbLine,deleteTbLine,saveSubTableInputData} from 'src/actions/action.js' ;

class Table183 extends BaseTableComp{
    constructor(props){
        super(props) ;
        this.state = {
            selectedId:'',
            name1:'',
            name2:'',
            dirty:false
        } ;
    }

    handleChangeInput(name,event){
        this.setState({[name]:event.target.value,dirty:true}) ;
    }

    getSubTableObj (){
        return {"name1":'yicj',"name2":'2'}
    }

    clearStateInputState(){
        this.setState({
            name1:'',
            name2:'',
            dirty:false
        }) ;
    }
    //保存输入项类容
    saveInputData(){
        let tbname = "list183" ;
        let param = {tbname,id:this.state.selectedId,name1:this.state.name1,name2:this.state.name2} ;
        this.props.saveSubTableInputData(param) ;
    }

    renderTbody(list){
        return list.map((item,index) =>{
            let selectedFlag = this.state.selectedId === item.id ;
            return <tr key ={index}  onClick ={this.handleClickTr.bind(this,item.id)} 
                className = {selectedFlag ? "selected_td" : ""}>
                <td>
                    {selectedFlag ? <Input  value= {this.state.name1||item.name1}
                     onChange={this.handleChangeInput.bind(this,'name1')}/> :item.name1}
                </td>
                <td>
                    {
                     selectedFlag ?<Input type ="text"
                     onChange={this.handleChangeInput.bind(this,'name2')}
                     value ={this.state.name2 ||item.name2}/> : item.name2
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
      saveSubTableInputData:(param)=>dispatch(saveSubTableInputData(param))
    } ;
}
export default connect(
    mapState2Props,
    mapDispatch2Props
)(Table183) ;

