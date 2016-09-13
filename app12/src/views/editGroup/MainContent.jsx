import React,{Component} from 'react' ;
import {Card,Input, Select, Checkbox, Button, notification ,message,
    DatePicker, InputNumber, Form ,Row, Col} from 'antd';
import Table183 from './Table183.jsx' ;
import {SUBMITFROM_EVENT_EDITGROUP,RESETFROM_EVENT_EDITGROUP} from 'src/constants/pubSubEvent.js' ; 
import PubSub from 'pubsub-js' ;
import {initBrandGroupPage} from 'src/api/api01.js' ;
import NProgress from 'nprogress' ;
import CommonUtil  from 'src/util/CommonUtil.js' ;


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
        this.initPageValue = this.initPageValue.bind(this) ;
        this.checkSaleEndDate = this.checkSaleEndDate.bind(this) ;
        NProgress.configure({ parent: '.container' });
    }
    //提交表单
    handleSubmit(msg,data) {
        this.props.form.validateFields((errors, values) => {
            if (!!errors) {
                console.log('Errors in form!!!');
                return;
            }
            console.log('Submit!!!');
            console.log(values);
        });
    }

    componentDidMount(){
        //NProgress.done();
        var token = PubSub.subscribe(SUBMITFROM_EVENT_EDITGROUP, this.handleSubmit );
        this.token = token ;
        NProgress.start();
        this.initPageValue() ;
    }

    //初始化页面
    initPageValue(){
        let _self = this ;
        initBrandGroupPage().then(function(retData){
            NProgress.done();
            //message.success('初始化数据成功');
            //console.info('retData : ' ,retData) ;
            let {sequenceNum,brandGroupName,saleStartDate,saleEndDate,
                loc1Type,loc1Value,loc2Type,loc2Value,geoLimit,travelStartDate,
                travelEndDate} = retData ;
            _self.props.form.setFieldsValue({
               sequenceNum,brandGroupName,saleStartDate,saleEndDate,
                loc1Type,loc1Value,loc2Type,loc2Value,geoLimit,travelStartDate,
                travelEndDate
            });
        },function(err){
            console.info('err : ',err) ;
            message.error('初始化数据失败') ;
        }) ;
    }

    componentWillUnmount(){
        PubSub.unsubscribe( this.token );
        NProgress.remove();
    }

    sequenceNumExists(rule, value, callback) {
        if (!value) {
            callback();
        } else {
            if(/^[0-9]{0,}$/.test(value)){
                setTimeout(function(){
                    if (value === '12345') {
                        callback([new Error('抱歉，该序列号已被占用。')]);
                    } else {
                        callback();
                    }
                },1000) ;
            }else{
                callback([new Error('请输入数字。')]);
            }
        }
    }

    checkSaleEndDate(rule, value, callback){
         if (!value) {
            callback();
        } else {
            let saleStartDate = this.props.form.getFieldValue('saleStartDate') ;
            let saleEndDate = this.props.form.getFieldValue('saleEndDate') ;
            console.info('saleStartDate : ' ,saleStartDate) ;
            console.info('saleEndDate : ' ,saleEndDate) ;

             callback([new Error('结束日期必须大于起始日期')]);
        }
    }


    render(){
        const { getFieldProps,getFieldError, isFieldValidating } = this.props.form ;
        let sequenceNumField = getFieldProps('sequenceNum',{
            initialValue:'',
            rules: [
                { required: true, min: 5, message: '序列号至少为 5 个字符' },
                { validator: this.sequenceNumExists },
            ],
        }) ;
        let brandGroupNameField = getFieldProps('brandGroupName',{
            initialValue:'',
            rules: [
                { required: true, min: 5, message: '序列号至少为 5 个字符' },
            ],
        }) ;
        let saleStartDateField = getFieldProps('saleStartDate',{
            initialValue:'',
            rules: [
                { required: true },
            ],
        }) ;
        let saleEndDateField = getFieldProps('saleEndDate',{
            initialValue:'',
            rules: [
                { required: true },
                {validator:this.checkSaleEndDate}
            ],
        }) ;
        let loc1TypeField = getFieldProps('loc1Type') ;
        let loc1ValueField = getFieldProps('loc1Value') ;
        let loc2TypeField = getFieldProps('loc2Type') ;
        let loc2ValueField = getFieldProps('loc2Value') ;
        let geoLimitField = getFieldProps('geoLimit',{
            initialValue:['Pear','Orange']
        }) ;
        let travelStartDateField = getFieldProps('travelStartDate') ;
        let travelEndDateField = getFieldProps('travelEndDate') ;
        return (
            <div className ="container">
                <Form horizontal >
                    <Card >
                        {/**必填项 start */}
                        <div className="content_layout">
                            <span className="left">必填项</span>
                            <div className="right">

                                <FormItem {...formItemLayout} label="序列号" 
                                    help={isFieldValidating('sequenceNum') ? '校验中...' : (getFieldError('sequenceNum') || []).join(', ')}
                                    hasFeedback
                                >
                                    <Input {...sequenceNumField} style={{ width: '100%' }}/>
                                </FormItem>

                                <FormItem {...formItemLayout}  label="品牌集名称">
                                    <Input  {...brandGroupNameField} />
                                </FormItem>

                                 <FormItem {...formItemLayout} label="销售日期"
                                    //help={  [...(getFieldError('saleStartDate') || []),...(getFieldError('saleEndDate') || [])] .join(', ') }
                                    help={  (getFieldError('saleEndDate') || []).join(', ') }
                                  >
                                    <DatePicker {...saleStartDateField} style={{width:"49%"}}/>
                                    <span className="two_input_blank"></span>
                                    <DatePicker {...saleEndDateField} style={{width:"49%"}} />
                                </FormItem>

                                 <FormItem {...formItemLayout}  label="区域1" >
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

                                <FormItem {...formItemLayout} label="区域2" >
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

                                <FormItem {...formItemLayout}  label="区域限制">
                                    <CheckboxGroup {...geoLimitField} options={options} />
                                </FormItem>
                            </div>
                        </div>
                         {/**必填项 end */}
                        
                        {/**选填项 start */}
                        <div className="content_layout">
                            <span className="left">选填项</span>
                            <div className="right">
                                
                                <FormItem {...formItemLayout}  label="旅行日期" >
                                    <DatePicker {...travelStartDateField} style={{width:"49%"}}/>
                                    <span className="two_input_blank"></span>
                                    <DatePicker {...travelEndDateField} style={{width:"49%"}}/>
                                </FormItem>
                                
                                <Row>
                                    <Col span={3} className="ant-form-item-label">
                                        <label> 发布</label>
                                    </Col>
                                    <Col span={12} >
                                         <Table183 tbname ="list183" list = {[1,2,3]}/>
                                    </Col>
                                </Row>

                                <FormItem {...formItemLayout} label="描述" >
                                    <Input type="textarea" rows={4} />
                                </FormItem>

                            </div>
                        </div>
                         {/**选填项 end */}
                    </Card>
                </Form>
            </div>
        ) ;
    }
}

MainContent = createForm()(MainContent);
export default MainContent ;