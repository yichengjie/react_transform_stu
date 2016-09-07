import React,{Component} from 'react' ;
import { Checkbox ,Input,Button,DatePicker } from 'antd';
import 'src/styles/querySection.css' ;
//const CheckboxGroup = Checkbox.Group;
var classNames = require('classnames');
const two_input ={
    width:"60px",
    height:"26px"
} ;
const common_input={
    width:"120px",
    height:"26px"
}
export default class IndexLayout extends Component {
    constructor(props){
        super(props) ;
        this.state={
            showMoreFlag:false
        };
        this.showMoreSwitch = this.showMoreSwitch.bind(this) ;
        this.renderMoreQuerySection = this.renderMoreQuerySection.bind(this) ;
    }
    showMoreSwitch(event){
        let showMoreFlag = event.target.checked ;
        this.setState({showMoreFlag}) ;
    }

    renderMoreQuerySection(){
        let retStr = this.state.showMoreFlag ? (<div className="query_row">
            <span className="marginL10 marginR5">城市对</span>
            <Input type ="text" style={two_input}/>
            <span style={{margin: "0 2px"}}>-</span>
            <Input type ="text"  style={two_input}/>
            <span className="marginL10 marginR5">发布对象</span>
            <Input type ="text" style={common_input} />
            <span className="marginL10 marginR5">销售日期</span>
            <DatePicker style={common_input} />
            <span style={{margin: "0 2px"}}>-</span>
            <DatePicker style={common_input} />
        </div>) : null;
        return retStr ;
    }


    render(){
        return (
            <div className ="query_section">
                <div className="query_row">
                    <span className="query_title">发布状态 | 生效状态</span>
                    <Checkbox >未发布</Checkbox>
                    <Checkbox >已发布</Checkbox>
                    <span className="marginLR5">|</span>
                    <Checkbox >未生效</Checkbox>
                    <Checkbox >已生效</Checkbox>
                    <Checkbox >已过期</Checkbox>
                    <span className="marginL10 marginR5">品牌集名称</span>
                    <Input type ="text" style={common_input}/>
                    <span className="marginL10 marginR5">品牌集名称</span>
                    <Input type ="text" style={common_input}/>
                    <span className="marginL10 marginR5"></span>
                    <Checkbox onChange ={this.showMoreSwitch}>更多</Checkbox>
                    <span className="pull-right marginR15">
                        <Button type="primary">查询</Button>
                    </span>
                </div>
                {this.renderMoreQuerySection()}
          </div>
        ) ;
    }
}