import React,{Component} from 'react' ;
import { Collapse,Button,Row, Col ,Card } from 'antd';
import BrandGroupPanel from './BrandGroupPanel.jsx' ;

class MainContent extends Component{
    render(){
        return (
            <div className ="container">
                <div className="nav_oper_btns">
                    <Button type ="primary" size="small">新建品牌集</Button>
                    <Button size="small" >发布</Button>
                    <Button size="small">截止</Button>
                    <Button size="small">删除</Button>
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