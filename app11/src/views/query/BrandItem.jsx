import React,{Component} from 'react' ;
import {Checkbox,Button,Table} from 'antd' ;

 class BrandItem extends Component{
    render(){
        return (
           <ul>
                <li className="brand_list">
                    <div className="brand_list_item item1">
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
                    <div className="brand_list_item pull-right">
                        <p><i className="glyphicon glyphicon-search myhand"></i></p>
                        <p><i className="glyphicon glyphicon-pencil myhand"></i></p>
                        <p><i className="glyphicon glyphicon-trash myhand"></i></p>
                    </div>
                </li>
                <li className="brand_list">
                    <div className="brand_list_item item1">
                        2
                    </div>
                    <div className="brand_list_item">
                        <span className="brand_img brand_img_ca"></span>
                    </div>
                    <div className="brand_list_item">
                        <p className="brand_name">xx001</p>
                        <p>层级序号：10011</p>
                        <p>测试一下啊这里的描述信息</p>
                    </div>
                    <div className="brand_list_item pull-right">
                        <p><i className="glyphicon glyphicon-search myhand"></i></p>
                        <p><i className="glyphicon glyphicon-pencil myhand"></i></p>
                        <p><i className="glyphicon glyphicon-trash myhand"></i></p>
                    </div>
                </li>
                <li className="brand_list">
                    <div className="brand_list_item item1">
                        3
                    </div>
                    <div className="brand_list_item">
                        <span className="brand_img brand_img_ca"></span>
                    </div>
                    <div className="brand_list_item">
                        <p className="brand_name">xx001</p>
                        <p>层级序号：10011</p>
                        <p>测试一下啊这里的描述信息</p>
                    </div>
                    <div className="brand_list_item pull-right">
                        <p><i className="glyphicon glyphicon-search myhand"></i></p>
                        <p><i className="glyphicon glyphicon-pencil myhand"></i></p>
                        <p><i className="glyphicon glyphicon-trash myhand"></i></p>
                    </div>
                </li>
                <li className="brand_list">
                    <div className="brand_list_item item1">
                        4
                    </div>
                    <div className="brand_list_item">
                        <span className="brand_img brand_img_ca"></span>
                    </div>
                    <div className="brand_list_item">
                        <p className="brand_name">xx001</p>
                        <p>层级序号：10011</p>
                        <p>测试一下啊这里的描述信息</p>
                    </div>
                    <div className="brand_list_item pull-right">
                        <p><i className="glyphicon glyphicon-search myhand"></i></p>
                        <p><i className="glyphicon glyphicon-pencil myhand"></i></p>
                        <p><i className="glyphicon glyphicon-trash myhand"></i></p>
                    </div>
                </li>
            </ul>
        ) ;
    }   
}


export default BrandItem ;