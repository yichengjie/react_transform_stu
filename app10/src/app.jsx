import React,{Component} from 'react';
import ValidateBasic from './containers/ValidateBasic.js' ;
import { Button,Row, Col} from 'antd';
import PubSub from 'pubsub-js' ;
import {SUBMITFROM_EVENT,RESETFROM_EVENT} from './constants/constant.js' ;
require('./lib/jq-validate/index.js') ;
import NavBar from './components/NavBar.jsx' ;

export default class App extends Component {
  constructor(props) {
    super(props) ;
  }
  handleSubmit(e){
    console.info('提交表单') ;
    PubSub.publish( SUBMITFROM_EVENT, '保存表单数据!' );
  }
  handleReset(e){
    PubSub.publish(RESETFROM_EVENT,'重置表单数据!') ;
  }
  render(){
    return (
      <div>
        <NavBar/>
        <Row>
            <Col span={10} offset={20} style={{marginTop:"10px"}}>
                <Button type="primary" onClick={this.handleSubmit}>保存</Button>
                <Button type="ghost" onClick={this.handleReset}>重置</Button>
            </Col>
        </Row>
        <div style={{paddingTop:"10px"}} className ="container">
           <ValidateBasic />
        </div>
      </div>
    ) ;
  }
}
