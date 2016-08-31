import React ,{Component} from 'react' ;
import { Popconfirm, message } from 'antd';

function confirm() {
  message.success('点击了确定');
}

function cancel() {
  message.error('点击了取消');
}

class App extends Component {
  constructor(props) {
    super(props) ;
  }
  render(){
    return (
      <div>
        <Popconfirm title="确定要删除这个任务吗？" onConfirm={confirm} onCancel={cancel}>
          <a href="#">删除</a>
        </Popconfirm>
     </div>
    ) ;
  }
}

export default App ;
