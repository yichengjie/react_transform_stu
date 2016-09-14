import React ,{Component} from 'react';
import {Button} from 'antd' ;
import uniquid from 'uniquid' ;
class TableFooterComp extends Component {
  addTableLine(){
    let tbname = this.props.tbname ;
    let id = uniquid(tbname) ;
    //console.info(this.props.obj) ;
    var obj = {...this.props.obj,id} ;
    this.props.addTableLine({tbname,obj}) ;
  }
  deleteTableLine(){
    let tbname = this.props.tbname ;
    let id = this.props.selectedId ;
    this.props.deleteTableLine({tbname,id}) ;
    this.props.clearSelectedId() ;
  }
  render (){
    return (
      <div className="table_footer">
          <Button type="button" size="small"
            onClick = {this.addTableLine.bind(this)}
             >增加一行</Button>
          <span className="marginR5"></span>
          <Button type="button" size="small"
            onClick = {this.deleteTableLine.bind(this)}
            >删除一行</Button>
            <span className="marginR5"></span>
          <Button type="button" size="small"
           type="primary" onClick ={this.props.saveTableData} >保存</Button>
      </div>
    ) ;
  }
}
export default TableFooterComp;
