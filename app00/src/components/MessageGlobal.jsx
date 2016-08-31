import React,{Component} from 'react' ;
import { message, Button } from 'antd';

const info = function () {
  //message.info('这是一条普通的提醒');
  message.error('这是一条报错提示');
  //message.warning('这是一条警告提示');
};

class App extends Component{
  constructor(props) {
    super(props) ;
  }
  render(){
    return(
      <Button type="primary" onClick={info}>显示普通提醒</Button>
    ) ;
  }
}
export default App ;
