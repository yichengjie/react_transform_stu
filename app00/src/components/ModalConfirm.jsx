import React,{Component} from 'react' ;
import { Modal, Button } from 'antd';
const confirm = Modal.confirm;

function showConfirm() {
  confirm({
    title: '您是否确认要删除这项内容',
    content: '一些解释',
    onOk() {
      console.log('确定');
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
        确认对话框
      </Button>
    ) ;
  }
}

export default App ;
