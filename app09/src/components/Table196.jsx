import React,{Component} from 'react' ;
import {Input} from 'antd' ;

class SubTable extends Component{
    constructor(props){
        super(props) ;
    }
    render(){
        return (
         <div className="table_layout"  style={{width:"500px"}}>
            <table>
                <thead>
                <tr>
                    <th width="100">市场方RBD</th>
                    <th width="100">承运方RBD</th>
                    <th width="100">市场方服务等级</th>
                    <th width="100">承运方服务等级</th>
                </tr>
                </thead>
                <tbody>
                    <tr>
                    <td><Input type ="text" className="required"/></td>
                    <td><Input type ="text"/></td>
                    <td><Input type ="text"/></td>
                    <td><Input type ="text"/></td>
                </tr>
                </tbody>
            </table>
        </div>
        ) ;
    }
}

export default SubTable ;
