import React,{Component} from 'react' ;
import {Input} from 'antd' ;

class ChooseBox2 extends Component{
    render(){
        return (
              <div className="service_choose_layout" style={{marginLeft: "0px"}}>
                    <div className="title">已选服务</div>
                    <div className="service_choose" style={{marginTop: "0px"}}>
                        <div className="choose_box choose_box_right" style={{width: "230px"}}>
                            <div className="choose_box_title">
                                <span className="text-info">服务详细</span>
                            </div>
                            <div className="service_list" >
                                <ul>
                                    <li className="choose4li">
                                        <span className="commercialName">优选座位组描述</span>
                                        <span className="serviceType">F</span>
                                        <span style={{paddingLeft: "3px"}}>&times;</span>
                                    </li>
                                    <li className="choose4li">1</li>
                                    <li className="choose4li">1</li>
                                    <li className="choose4li">1</li>
                                    <li className="choose4li">1</li>
                                    <li className="choose4li">1</li>
                                </ul>
                            </div>
                    </div>
                </div>
            </div>
        ) ;
    }
}

export default ChooseBox2 ;