import React,{Component} from 'react';
import { Button,Row, Col,Affix,BackTop} from 'antd';
import PubSub from 'pubsub-js' ;
import {SUBMITFROM_EVENT,RESETFROM_EVENT} from './constants/constant.js' ;
require('./lib/jq-validate/index.js') ;
import NavBar from './components/NavBar.jsx' ;
import ValidateBasic from './containers/ValidateBasic.js' ;

const style = {
  height: 40,
  width: 40,
  lineHeight: '40px',
  borderRadius: 4,
  backgroundColor: '#57c5f7',
  color: '#fff',
  textAlign: 'center',
  fontSize: 20,
};

export default class App extends Component {
  constructor(props) {
    super(props) ;
  }
  handleSubmit(e){
    console.info('点击了保存按钮!') ;
    PubSub.publish( SUBMITFROM_EVENT, '点击了保存按钮!' );
  }
  handleReset(e){
    PubSub.publish(RESETFROM_EVENT,'点击了重置表单数据按钮!') ;
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
        <div style={{paddingTop:"10px",height:"2000px"}} className ="container">
           <ValidateBasic />
           <BackTop style={{ bottom: 100 }}>
              <div style={style}>UP</div>
           </BackTop>
        </div>
      </div>
    ) ;
  }
}
