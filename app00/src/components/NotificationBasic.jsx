import React ,{Component} from 'react' ;
import { Button, notification } from 'antd';

const openNotification = function () {
  notification.open({
    message: '这是标题',
    description: '这是提示框的文案这是提示框的文案这是提示框的文案这是提示框的文案这是提示框的文案这是提示框的文案这是提示框的文案',
  });
};

const openNotificationWithIcon = function (type) {
  return function () {
    notification[type]({
      message: '这是标题',
      description: '这是提示框的文案这是提示框示框的文案这是提示是提示框的文案这是提示框的文案',
    });
  };
};

class App extends Component {
  constructor(props) {
    super(props) ;
  }
  render(){
    return (
      <div>
        <Button type="primary" onClick={openNotification}>打开通知提醒框</Button>
        <Button onClick={openNotificationWithIcon('success')}>成功</Button>
        <Button onClick={openNotificationWithIcon('info')}>消息</Button>
        <Button onClick={openNotificationWithIcon('warning')}>警告</Button>
        <Button onClick={openNotificationWithIcon('error')}>错误</Button>
     </div>
    ) ;
  }
}

export default App ;
