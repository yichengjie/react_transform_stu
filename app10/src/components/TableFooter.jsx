import React ,{Component} from 'react';
import {Button} from 'antd' ;
 class TableFooter extends Component {
   deleteTableLine(){
     console.info('hello world') ;
   }
   render (){
     return (
       <div className="table_footer">
           <Button type="button" size="small"
              onClick = {this.props.addTableLine}
              type="primary" >增加一行</Button>
           <Button type="button" size="small"
              onClick = {this.props.deleteTableLine}
              >删除一行</Button>
       </div>
     ) ;
   }
 }
 export default TableFooter;
