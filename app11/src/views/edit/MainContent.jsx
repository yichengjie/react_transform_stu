import React,{Component} from 'react' ;
import {Card,Input, Select,Radio, Checkbox, Button, 
    DatePicker, InputNumber, Form ,Row, Col,Icon} from 'antd';
import Table183 from './Table183.jsx' ;
import ChooseBox1 from './ChooseBox1.jsx' ;
import ChooseBox2 from './ChooseBox2.jsx' ;
const Option = Select.Option;
const createForm = Form.create;
const FormItem = Form.Item;
const CheckboxGroup = Checkbox.Group;
const RadioGroup = Radio.Group;
const formItemLayout = {
    labelCol: { span: 3 },
    wrapperCol: { span: 12 },
};
const options = [
  { label: '区域1→区域2', value: 'Apple' },
  { label: '区域2→区域1', value: 'Pear' },
  { label: '双向', value: 'Orange' },
];
class MainContent extends Component{
    constructor(props){
        super(props) ;
    }
    render(){
        return (
            <div className ="container">
                <Form horizontal >
                 <Card>
                     {/**品牌 start */}
                     <div className="content_layout">
                        <span className="left">品牌</span>
                        <div className="right">
                            <FormItem
                                {...formItemLayout}
                                label="层级序号">
                                <InputNumber  style={{ width: '100%' }}/>
                            </FormItem>
                            <FormItem
                                {...formItemLayout}
                                label="品牌名称">
                                <Input />
                            </FormItem>
                            <FormItem
                                {...formItemLayout}
                                label="旅客类型">
                                <RadioGroup  >
                                    <Radio key="a" value={1}>A</Radio>
                                    <Radio key="b" value={2}>B</Radio>
                                    <Radio key="c" value={3}>C</Radio>
                                    <Radio key="d" value={4}>D</Radio>
                                </RadioGroup>
                            </FormItem>
                            <FormItem
                                {...formItemLayout}
                                label="描述">
                                <Input type ="textarea" rows={4}/>
                            </FormItem>
                        </div>
                     </div>
                     {/**品牌 end */}

                     {/**运价 start */}
                     <div className="content_layout">
                        <span className="left">运价</span>
                        <div className="right">
                            <Row>
                                <Col span={3} className="ant-form-item-label">
                                    <label> 运价</label>
                                </Col>
                                <Col span={12} >
                                    <Table183 tbname ="list183" list = {[{id:1},{id:2},{id:3}]}/>
                                </Col>
                            </Row>
                        </div>
                     </div>
                     {/**运价 end */}

                     {/**附加服务配置 start */}
                     <div className="content_layout">
                        <span className="left">附加服务配置</span>
                        <div className="right">
                            <ChooseBox1/>
                             <div className="service_choose_toRight">
                               <Icon type="swap-right" />
                             </div>
                             <ChooseBox2/>
                        </div>
                     </div>
                     {/**附加服务配置 end */}
                 </Card>
                </Form>
            </div>
        ) ;
    }
}

export default MainContent ;