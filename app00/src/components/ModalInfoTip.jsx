import React ,{Component} from 'react' ;
import { Modal, Button } from 'antd';

function info() {
  Modal.info({
    title: '这是一条通知信息',
    content: (
      <div>
        <p>一些附加信息一些附加信息一些附加信息</p>
        <p>一些附加信息一些附加信息一些附加信息</p>
      </div>
    ),
    onOk() {},
  });
}

function success() {
  Modal.success({
    title: '这是一条通知信息',
    content: '一些附加信息一些附加信息一些附加信息',
  });
}

function error() {
  Modal.error({
    title: '这是一条通知信息',
    content: '一些附加信息一些附加信息一些附加信息',
  });
}

function warning() {
  Modal.warning({
    title: '这是一条警告信息',
    content: '一些附加信息一些附加信息一些附加信息',
  });
}

function success2() {
  const modal = Modal.success({
    title: '这是一条通知信息',
    content: '一秒后自动移除',
  });
  setTimeout(() => modal.destroy(), 1000);
}



class App extends Component {
  constructor(props) {
    super(props) ;
  }
  render(){
    return (
      <div>
        <Button onClick={info}>信息提示-手动移除</Button>
        <Button onClick={success}>成功提示-手动移除</Button>
        <Button onClick={error}>失败提示-手动移除</Button>
        <Button onClick={warning}>警告提示-手动移除</Button>
        <Button onClick={success2}>成功提示-自动移除</Button>
     </div>
    ) ;
  }
}

export default App ;
