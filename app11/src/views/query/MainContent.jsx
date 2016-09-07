import React,{Component} from 'react' ;
import { Collapse,Button,Row, Col ,Card } from 'antd';
import BrandGroupPanel from './BrandGroupPanel.jsx' ;

class MainContent extends Component{
    render(){
        return (
            <div className ="container">
                <div className="nav_oper_btns">
                    <Button type ="primary" >新建品牌集</Button>
                    <Button  >发布</Button>
                    <Button >截止</Button>
                    <Button >删除</Button>
                </div>
                <BrandGroupPanel />
                <BrandGroupPanel />
                <BrandGroupPanel />
                <BrandGroupPanel />
            </div>
        ) ;
    }
}

export default MainContent ;