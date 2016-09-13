import React,{Component} from 'react' ;
import {Checkbox,Button,Icon} from 'antd' ;
class BrandGroupTitle extends Component{

    toNewBrandUI(event){
        window.location.href = 'edit.html' ;
    }
    render(){
        return (
            <div className="brand_title">
                <span className="left text-info">
                    <Checkbox name ="checkAll"/>
                    <span className="marginR5"></span>
                    <Icon type ="circle-o-up"/>
                    <span className="marginR5"></span>
                    asgui_ca test
                    <span className="marginR15"></span>
                    <Icon type ="question-circle-o" />
                </span>
                <span className="right">
                    <Icon type="edit" className="myhand" title="编辑"/>
                    <span className="marginR10"></span>
                    <Button size="small" onClick ={this.toNewBrandUI}>新建品牌</Button>
                </span>
                <span className="center">
                    <span>序列号：8776559</span>
                    <span className="marginL10">城市对：<span className="bold">1 → 2</span></span>
                    <span className="marginL10">生效日期对：<span className="bold">2016-06-30 — 9999-12-31</span></span>
                    <span className="marginL10">旅行日期对：<span className="bold">2016-06-30 — 9999-12-31</span></span>
                    <span className="marginL10">发布对象：状态：<span className="text-danger">未发布</span></span>
                </span>
            </div>
        ) ;
    }
}

export default BrandGroupTitle ;

