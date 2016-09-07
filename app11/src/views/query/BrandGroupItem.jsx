import React,{Component} from 'react' ;
import {Checkbox,Button,Icon} from 'antd' ;
import BrandItem from './BrandItem.jsx' ;

export default class BrandGroupItem extends Component{
    render(){
        return (
            <div className="panel panel-default brand_group">
                <div className="panel-heading">
                    <div className="panel-title">
                        <div className="panel-title">
                            <div className="brand_title">
                                <span className="left text-info">
                                    <Checkbox name ="checkAll"/>
                                    <span className="marginR5"></span>
                                    <Icon type ="circle-o-up"/>
                                    <span className="marginR5"></span>
                                    asgui_ca test
                                    <span className="marginR5"></span>
                                    <Icon type ="question-circle-o"/>
                                </span>
                                <span className="right">
                                    <i className="glyphicon glyphicon-pencil marginR10 myhand"></i>
                                    <Button size="small">新建品牌</Button>
                                </span>
                                <span className="center">
                                    <span>序列号：8776559</span>
                                    <span className="marginL10">城市对：<span className="bold">1 → 2</span></span>
                                    <span className="marginL10">生效日期对：<span className="bold">2016-06-30 — 9999-12-31</span></span>
                                    <span className="marginL10">旅行日期对：<span className="bold">2016-06-30 — 9999-12-31</span></span>
                                    <span className="marginL10">发布对象：状态：<span className="text-danger">未发布</span></span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="panel-body">
                    <ul>
                        <BrandItem/>
                        <BrandItem/>
                        <BrandItem/>
                        <BrandItem/>
                    </ul>
                </div>
            </div>
        ) ;
    }
}





