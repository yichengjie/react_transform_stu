import React ,{Component} from 'react' ;
import {Button} from 'antd' ;

class QuerySection extends Component {
    handleBackPage(event){
        window.location.href = 'index.html' ;
    }
    render(){
        return (
             <div className ="query_section">
                <div className="query_row">
                     <span className="query_title">新建品牌集</span>
                     <span className="marginLR5">品牌 | 运价 | 附加服务</span>
                     <span className="pull-right marginR15">
                        <Button  size ="small" onClick={this.handleBackPage}>返回</Button>
                        <Button type="primary" size ="small" >保存</Button>
                     </span>
                </div>
             </div>
        ) ;
    }
}

export default QuerySection ;