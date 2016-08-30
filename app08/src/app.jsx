import React,{Component} from 'react';
import ValidateBasic from './containers/ValidateBasic.js' ;
import { Button,Row, Col} from 'antd';

export default class App extends Component {
  constructor(props) {
    super(props) ;
  }
  handleSubmit(e){
    console.info('提交表单') ;
  }
  render(){
    return (
      <div className = "container">
        <Row>
          <Col span={7}></Col>
          <Col span={5}><Button type="primary" onClick={this.handleSubmit.bind(this)}>submit</Button></Col>
        </Row>
        <br/>
        <ValidateBasic />
      </div>
    ) ;
  }
}
