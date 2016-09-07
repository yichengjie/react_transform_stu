import React,{Component} from 'react' ;
import {Checkbox,Button} from 'antd' ;
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
                                    <i className="glyphicon glyphicon-upload marginL10" data-name="showHideBody"></i>
                                    asgui_ca test
                                    <i className="glyphicon glyphicon-info-sign pull-right descrImg" data-toggle="tooltip"
                                    data-placement="top"  title="描述信息为空"></i>
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
                    <BrandItem />
                </div>
            </div>
        ) ;
    }
}





