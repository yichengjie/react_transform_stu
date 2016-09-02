import React,{Component} from 'react';
import ValidateBasic from './containers/ValidateBasic.js' ;
import { Button,Row, Col} from 'antd';
import PubSub from 'pubsub-js' ;
import {SUBMITFROM_EVENT,RESETFROM_EVENT} from './constants/constant.js' ;
require('./lib/jq-validate/index.js') ;


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
      <div className = "container">
        <Row  gutter={16}>
          <Col span={2} offset={7}>
            <Button type="primary" onClick={this.handleSubmit}>保存</Button>
          </Col>
          <Col span={2}>
            <Button type="ghost" onClick={this.handleReset}>重置</Button>
          </Col>
        </Row>
        <br/>
        <ValidateBasic />
      </div>
    ) ;
  }
}
