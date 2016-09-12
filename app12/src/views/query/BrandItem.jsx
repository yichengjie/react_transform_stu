import React,{Component} from 'react' ;
import {Checkbox,Button,Table,Icon} from 'antd' ;

class BrandItem extends Component{
    render(){
        return (
            <li className="brand_list">
                <div className="left item1">
                    1
                </div>
                <div className="left">
                    <span className="brand_img brand_img_ca"></span>
                </div>
                <div className="left">
                    <p className="brand_name">xx001</p>
                    <p>层级序号：10011</p>
                    <p>测试一下啊这里的描述信息</p>
                </div>
                <div className="right">
                    <p>
                        <Icon type="info-circle-o myhand"/>
                    </p>
                    <p>
                        <Icon type="edit myhand"/>
                    </p>
                    <p>
                        <Icon type="delete myhand"/>
                    </p>
                </div>
            </li>
        ) ;
    }   
}
export default BrandItem ;