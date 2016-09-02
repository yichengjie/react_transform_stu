import React from 'react' ;
import { Menu, Icon } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

const App = React.createClass({
  getInitialState() {
    return {
      current: 'mail',
    };
  },
  handleClick(e) {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  },
  render() {
    return (
      <Menu onClick={this.handleClick}
        selectedKeys={[this.state.current]}
        mode="horizontal"
      >
        <Menu.Item key="mail">
          <Icon type="home" />OCGUI
        </Menu.Item>
        <Menu.Item key="app" disabled>
          <Icon type="appstore" />附加服务
        </Menu.Item>
        <SubMenu title={<span><Icon type="setting" />导航--基础数据</span>}>
          <Menu.Item key="setting:1">数据源配置</Menu.Item>
          <Menu.Item key="setting:2">里程积分兑换</Menu.Item>
          <Menu.Item key="setting:3">附加服务配置</Menu.Item>
        </SubMenu>
        <Menu.Item key="alipay">
          <a href="http://www.alipay.com/" target="_blank">运价验证</a>
        </Menu.Item>
      </Menu>
    );
  },
});

export default App ;
