import React,{Component} from 'react';
import { Button,Row, Col,Affix} from 'antd';
import PubSub from 'pubsub-js' ;
import {SUBMITFROM_EVENT,RESETFROM_EVENT} from './constants/constant.js' ;
require('./lib/jq-validate/index.js') ;
import NavBar from './components/NavBar.jsx' ;
import ValidateBasic from './containers/ValidateBasic.js' ;

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
        <Affix>
          <NavBar/>
        </Affix>
        <Row>
            <Col span={4} offset={20} style={{marginTop:"10px"}}>
                <Button type="primary" onClick={this.handleSubmit}>保存</Button>
                <Button type="ghost" onClick={this.handleReset}>重置</Button>
            </Col>
        </Row>
        <div style={{paddingTop:"10px",height:"1000px"}} className ="container">
           <ValidateBasic />
                  

        </div>
      </div>
    ) ;
  }
}
