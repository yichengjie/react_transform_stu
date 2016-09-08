import React,{Component} from 'react' ;
import {Card,Input, Select, Checkbox, Button, DatePicker, InputNumber, Form ,Row, Col} from 'antd';
import Table183 from './Table183.jsx' ;
const Option = Select.Option;
const createForm = Form.create;
const FormItem = Form.Item;
const CheckboxGroup = Checkbox.Group;
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

    render(){
        const { getFieldProps } = this.props.form;
        return (
            <div className ="container">
                <Form horizontal >
                    <Card >
                        <div className="content_layout">
                            <span className="left">选填项</span>
                            <div className="right">
                                <FormItem
                                  {...formItemLayout}
                                  label="序列号">
                                    <InputNumber  style={{ width: '100%' }}/>
                                </FormItem>
                                <FormItem
                                  {...formItemLayout}
                                  label="品牌集名称">
                                    <Input  />
                                </FormItem>
                                 <FormItem
                                  {...formItemLayout}
                                  label="销售日期" >
                                    <DatePicker style={{width:"49%"}}/>
                                    <span className="two_input_blank"></span>
                                    <DatePicker style={{width:"49%"}} />
                                </FormItem>
                                 <FormItem
                                  {...formItemLayout}
                                  label="区域1" >
                                    <Select placeholder="Please select a country" style={{ width: '49%' }}>
                                        <Option value="china">China</Option>
                                        <Option value="use">U.S.A</Option>
                                        <Option value="japan">Japan</Option>
                                        <Option value="korean">Korea</Option>
                                        <Option value="Thailand">Thai</Option>
                                    </Select>
                                    <span className="two_input_blank"></span>
                                    <Input style={{width:"49%"}}/>
                                </FormItem>
                                <FormItem
                                  {...formItemLayout}
                                  label="区域2" >
                                    <Select placeholder="Please select a country" style={{ width: '49%' }}>
                                        <Option value="china">China</Option>
                                        <Option value="use">U.S.A</Option>
                                        <Option value="japan">Japan</Option>
                                        <Option value="korean">Korea</Option>
                                        <Option value="Thailand">Thai</Option>
                                    </Select>
                                    <span className="two_input_blank"></span>
                                    <Input style={{width:"49%"}}/>
                                </FormItem>
                                <FormItem
                                  {...formItemLayout}
                                  label="区域限制">
                                    <CheckboxGroup options={options} defaultValue={['Pear']}  />
                                </FormItem>
                            </div>
                        </div>

                        <div className="content_layout">
                            <span className="left">选填项</span>
                            <div className="right">
                                <FormItem
                                  {...formItemLayout}
                                  label="旅行日期" >
                                    <DatePicker style={{width:"49%"}}/>
                                    <span className="two_input_blank"></span>
                                    <DatePicker style={{width:"49%"}}/>
                                </FormItem>
                                <Row>
                                    <Col span={3} className="ant-form-item-label">
                                        <label> 发布</label>
                                    </Col>
                                    <Col span={12} >
                                         <Table183 tbname ="list183" list = {[1,2,3]}/>
                                    </Col>
                                </Row>

                                <FormItem
                                  {...formItemLayout}
                                  label="描述" >
                                    <Input type="textarea" rows={4} />
                                </FormItem>
                            </div>
                        </div>

                    </Card>
                </Form>
            </div>
        ) ;
    }
}
MainContent = createForm()(MainContent);
export default MainContent ;