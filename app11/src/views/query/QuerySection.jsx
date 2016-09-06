import React,{Component} from 'react' ;
import { Checkbox } from 'antd';
const CheckboxGroup = Checkbox.Group;
const plainOptions = [
  { label: '未发布', value: '1' },
  { label: '已发布', value: '2' }
];
export default class IndexLayout extends Component {
    constructor(props){
        super(props) ;
    }
    render(){
        return (
            <div className ="query_section">
                <div className="query_row">
                    <span className="query_title">发布状态 | 生效状态</span>
                    <CheckboxGroup options={plainOptions} defaultValue={['1']} />
                    <span className="marginLR5">|</span>
                    <CheckboxGroup options={plainOptions} defaultValue={['1']} />
                    <span className="marginL10 marginR5">品牌集名称</span>
                    <span className="marginL10 marginR5">品牌集名称</span>
                    <span className="pull-right marginR15">
                        <button type="button" className="btn btn-sm btn-primary">查询</button>
                    </span>
                </div>
                <div className="query_row">
                    <span className="marginL10 marginR5">城市对</span>
                    <span style={{margin: "0 2px"}}>-</span>
                    <span className="marginL10 marginR5">发布对象</span>
                    <span className="marginL10 marginR5">销售日期</span>
                    <span style={{margin: "0 2px"}}>-</span>
                </div>
          </div>
        ) ;
    }
}