import React ,{Component} from 'react' ;
import {Button} from 'antd' ;
class QuerySection extends Component {
    render(){
        return (
             <div className ="query_section">
                <div className="query_row">
                    <span className="query_title">新建品牌集</span>
                    <span className="marginLR5">品牌集</span>
                    <span className="pull-right marginR15">
                        <Button className="btn" size ="small">返回</Button>
                        <Button className="btn" type="primary" size ="small">保存</Button>
                    </span>
                </div>
             </div>
        ) ;
    }
}

export default QuerySection ;