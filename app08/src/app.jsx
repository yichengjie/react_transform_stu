import React,{Component} from 'react';
import ValidateBasic from './containers/ValidateBasic.js' ;
import { Button,Row, Col} from 'antd';
import PubSub from 'pubsub-js' ;
import {SUBMITFROM_EVENT} from './constants/constant.js' ;

export default class App extends Component {
  constructor(props) {
    super(props) ;
  }
  handleSubmit(e){
    console.info('提交表单') ;
    PubSub.publish( SUBMITFROM_EVENT, 'hello world!' );
  }
  render(){
    return (
      <div className = "container">
        <Row>
          <Col span={7}></Col>
          <Col span={5}><Button type="primary" onClick={this.handleSubmit}>submit</Button></Col>
        </Row>
        <br/>
        <ValidateBasic />
      </div>
    ) ;
  }
}
