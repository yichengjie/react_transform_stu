import React ,{Component} from 'react' ;
import { Button, notification } from 'antd';

const close = function () {
  console.log('我被默认的关闭按钮关闭了！');
};

const openNotification = function () {
  const key = `open${Date.now()}`;
  const btnClick = function () {
    console.info('点击关闭消息提示!') ;
    // 隐藏提醒框
    notification.close(key);
  };
  const btn = (
    <Button type="primary" size="small" onClick={btnClick}>
      自定义关闭按钮并触发回调函数
    </Button>
  );
  notification.open({
    message: '这是标题',
    description: '这是提示框的文案这是提示框示框的文案这是提示是提示框的文案这是提示框的文案',
    btn,
    key,
    onClose: close,
  });
};

class App extends Component {
  constructor(props) {
    super(props) ;
  }
  render(){
    return (
      <div>
        <Button type="primary" onClick={openNotification}>打开通知提醒框</Button>
     </div>
    ) ;
  }
}

export default App ;
