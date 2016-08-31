import React,{Component} from 'react' ;
import { Modal, Button } from 'antd';
const confirm = Modal.confirm;

function showConfirm() {
  confirm({
    title: '您是否确认要删除这项内容',
    content: '点确认 1 秒后关闭',
    onOk() {
      return new Promise((resolve) => {
        setTimeout(resolve, 1000);
      });
    },
    onCancel() {},
  });
}

class App extends Component {
  constructor(props) {
    super(props) ;
  }
  render(){
    return (
      <Button onClick={showConfirm}>
        确认对话框 Promise
      </Button>
    ) ;
  }
}

export default App ;
