import React,{Component} from 'react' ;
import {Card,Input, Select, Checkbox, Button, DatePicker, InputNumber, Form ,Row, Col} from 'antd';
import Table183 from './Table183.jsx' ;
import {SUBMITFROM_EVENT_EDITGROUP,RESETFROM_EVENT_EDITGROUP} from 'src/constants/pubSubEvent.js' ; 
import PubSub from 'pubsub-js' ;
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
    constructor(props){
        super(props) ;
        this.handleSubmit = this.handleSubmit.bind(this) ;
    }
    //提交表单
    handleSubmit(msg,data) {
        //e.preventDefault();
        console.info('msg : ',msg) ;
        console.info('data : ' ,data) ;
        console.log('收到表单值：', this.props.form.getFieldsValue());
    }

    componentDidMount(){
        var token = PubSub.subscribe(SUBMITFROM_EVENT_EDITGROUP, this.handleSubmit );
        this.token = token ;
    }
    componentWillUnmount(){
        PubSub.unsubscribe( this.token );
    }
    render(){
        const { getFieldProps } = this.props.form ;
        let sequenceNumField = getFieldProps('sequenceNum',{
            initialValue:''
        }) ;
        let brandGroupNameField = getFieldProps('brandGroupName',{
            initialValue:''
        }) ;
        let saleStartDateField = getFieldProps('saleStartDate') ;
        let saleEndDateField = getFieldProps('saleEndDate') ;
        let loc1TypeField = getFieldProps('loc1Type') ;
        let loc1ValueField = getFieldProps('loc1Value') ;
        let loc2TypeField = getFieldProps('loc2Type') ;
        let loc2ValueField = getFieldProps('loc2Value') ;
        let geoLimitField = getFieldProps('geoLimit',{
            initialValue:['Pear','Orange']
        }) ;

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
                                    <InputNumber {...sequenceNumField} style={{ width: '100%' }}/>
                                </FormItem>
                                <FormItem
                                  {...formItemLayout}
                                  label="品牌集名称">
                                    <Input  {...brandGroupNameField} />
                                </FormItem>
                                 <FormItem
                                  {...formItemLayout}
                                  label="销售日期" >
                                    <DatePicker {...saleStartDateField} style={{width:"49%"}}/>
                                    <span className="two_input_blank"></span>
                                    <DatePicker {...saleEndDateField} style={{width:"49%"}} />
                                </FormItem>
                                 <FormItem
                                  {...formItemLayout}
                                  label="区域1" >
                                    <Select {...loc1TypeField} placeholder="Please select a country" style={{ width: '49%' }}>
                                        <Option value="china">China</Option>
                                        <Option value="use">U.S.A</Option>
                                        <Option value="japan">Japan</Option>
                                        <Option value="korean">Korea</Option>
                                        <Option value="Thailand">Thai</Option>
                                    </Select>
                                    <span className="two_input_blank"></span>
                                    <Input {...loc1ValueField} style={{width:"49%"}}/>
                                </FormItem>
                                <FormItem
                                  {...formItemLayout}
                                  label="区域2" >
                                    <Select {...loc2TypeField} placeholder="Please select a country" style={{ width: '49%' }}>
                                        <Option value="china">China</Option>
                                        <Option value="use">U.S.A</Option>
                                        <Option value="japan">Japan</Option>
                                        <Option value="korean">Korea</Option>
                                        <Option value="Thailand">Thai</Option>
                                    </Select>
                                    <span className="two_input_blank"></span>
                                    <Input {...loc2ValueField} style={{width:"49%"}}/>
                                </FormItem>
                                <FormItem
                                  {...formItemLayout}
                                  label="区域限制">
                                    <CheckboxGroup {...geoLimitField} options={options} />
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