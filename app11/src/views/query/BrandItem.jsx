import React,{Component} from 'react' ;
import {Checkbox,Button,Table,Icon} from 'antd' ;

class BrandItem extends Component{
    render(){
        return (
            <li className="brand_list">
                <div className="brand_list_item">
                    1
                </div>
                <div className="brand_list_item">
                    <span className="brand_img brand_img_ca"></span>
                </div>
                <div className="brand_list_item">
                    <p className="brand_name">xx001</p>
                    <p>层级序号：10011</p>
                    <p>测试一下啊这里的描述信息</p>
                </div>
                <div className="pull-right">
                    <p><Icon type="info-circle-o"/></p>
                    <p><Icon type="edit"/></p>
                    <p><Icon type="delete"/></p>
                </div>
            </li>
        ) ;
    }   
}
export default BrandItem ;