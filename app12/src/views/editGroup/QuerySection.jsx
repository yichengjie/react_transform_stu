import React ,{Component} from 'react' ;
import {Button} from 'antd' ;
class QuerySection extends Component {

    //处理‘返回按钮’被点击时的回调
    handleBackPage(event){
        window.location.href = "index.html" ;
    }
    render(){
        return (
             <div className ="query_section">
                <div className="query_row">
                    <span className="query_title">新建品牌集</span>
                    <span className="marginLR5">品牌集</span>
                    <span className="pull-right marginR15">
                        <Button className="btn" size ="small" onClick ={this.handleBackPage}>返回</Button>
                        <Button className="btn" type="primary" size ="small">保存</Button>
                    </span>
                </div>
             </div>
        ) ;
    }
}

export default QuerySection ;