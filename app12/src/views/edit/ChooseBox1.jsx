import React,{Component} from 'react' ;
import {Input} from 'antd' ;

class ChooseBox1 extends Component{
    render(){
        return (
             <div className="service_choose_layout" style={{marginLeft: "30px"}}>
                <div className="title">备选服务</div>
                <div className="service_choose" style={{marginTop: "0"}}>
                    <div className="choose_box">
                        <div className="choose_box_title">
                            <Input placeholder="选择服务分组" />
                                    
                        </div>
                        <div className="service_list">
                            <ul>
                                <li>优选座位组描述F</li>
                                <li>1</li>
                            </ul>
                        </div>
                    </div>
                    <div className="choose_box choose_box_right" style={{width: "280px"}}>
                        <div className="choose_box_title">
                            <Input  placeholder="选择服务分组" />
                        </div>
                        <div className="service_list">
                            <ul>
                                <li className="choose4li">
                                    <span className="orange">[0DG]</span>
                                    <span className="commercialName">UPTO50LB 23KG AND62LI 158LCM</span>
                                    <span className="serviceType">F</span>
                                    <span className="ssrCode">0B5E</span>
                                </li>
                                <li className="choose4li">1</li>
                                <li className="choose4li">1</li>
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

export default ChooseBox1 ;