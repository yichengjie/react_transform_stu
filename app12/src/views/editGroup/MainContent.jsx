import React,{Component} from 'react' ;
import {Card,Input, Select, Checkbox, Button, notification ,message,
    DatePicker, InputNumber, Form ,Row, Col} from 'antd';
import Table183 from './Table183.jsx' ;
import {SUBMITFROM_EVENT_EDITGROUP,RESETFROM_EVENT_EDITGROUP} from 'src/constants/pubSubEvent.js' ; 
import PubSub from 'pubsub-js' ;
import {initBrandGroupPage} from 'src/api/api01.js' ;
import NProgress from 'nprogress' ;
import CommonUtil  from 'src/util/CommonUtil.js' ;
import moment from 'moment' ;
const dateFormatStr = "YYYY/MM/DD" ; 


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

const geoList = [{"name":"选择","value":""},
				{"name":"大区","value":"A"},{"name":"城市","value":"C"},
				{"name":"国家","value":"N"},{"name":"机场","value":"P"},
				{"name":"州","value":"S"},{"name":"区域","value":"Z"}] ;

class MainContent extends Component{
    constructor(props){
        super(props) ;
        this.handleSubmit = this.handleSubmit.bind(this) ;
        this.initPageValue = this.initPageValue.bind(this) ;
        this.checkSaleEndDate = this.checkSaleEndDate.bind(this) ;
        this.checkSaleStartDate = this.checkSaleStartDate.bind(this) ;
        this.handleChangeLocType = this.handleChangeLocType.bind(this) ;
        this.checkLoc1Type = this.checkLoc1Type.bind(this) ;
        NProgress.configure({ parent: '.container' });
        notification.config({
            top: 100
        });
        this.state = {
            list183:[1,2,3]
        } ;
    }
    getTodayDate(){
       let dateStr = moment().format(dateFormatStr) ;
       return new Date(dateStr) ;
    }
    //提交表单
    handleSubmit(msg,data) {
        let jqFlag = this.jq_validator.form() ;
        console.info('jqFlag : ' + jqFlag) ;
        this.props.form.validateFields((errors, values) => {
            if (!!errors) {
                console.log('Errors in form!!!');
                return;
            }
            notification.success({
                message: '成功',
                description: '验证通过，保存数据到数据库'
            }) ;
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
        var validator = $("#myForm").validate({meta:""});
        this.jq_validator = validator ;
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
                travelEndDate,descr} = retData ;
            _self.props.form.setFieldsValue({
               sequenceNum,brandGroupName,saleStartDate,saleEndDate,
                loc1Type,loc1Value,loc2Type,loc2Value,geoLimit,travelStartDate,
                travelEndDate,descr
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
                },100) ;
            }else{
                callback([new Error('请输入数字。')]);
            }
        }
    }

    checkSaleStartDate(rule, value, callback){
        if (!value) {
            callback();
        } else {
            const form = this.props.form;
            let now = this.getTodayDate() ;
            if(value<now){
                callback([new Error('起始日期必须大于当前日期')]);
            }else{
                //强制结束日期校验
                form.validateFields(['saleEndDate'], { force: true });
                callback();
            }
        }
    }

    checkSaleEndDate(rule, value, callback){
        if(!value){
           callback(); 
        }else{
            const form = this.props.form;
            let now = this.getTodayDate() ;
            if(value<now){
                 callback([new Error('结束日期必须大于当前日期')]);
            }else{
                //截止日期必须大于起始日期的判断
                let startDate = this.props.form.getFieldValue('saleStartDate') ;
                if(startDate>value){
                    callback([new Error('结束日期必须大于起始日期')]);
                }else{//如果校验通过，则触发起始日期的校验
                    callback();
                }
            }
        }
    }

    checkLoc1Type(rule, value, callback){
        this.props.form.validateFields(['loc1Value'], { force: true });
        callback();
    }

    checkLoc1Value(rule, value, callback){
        let locType = this.props.form.getFieldValue('loc1Type') ;
        let locValue = this.props.form.getFieldValue('loc1Value') ;
        let {flag,msg} = CommonUtil.checkGeoLocl(locValue,locType) ;
        if(!flag){
            callback(msg);
        }else{
            callback();
        }
    }

    checkLoc2Type(rule, value, callback){
        const form = this.props.form;
        form.validateFields(['loc2Value'], { force: true });
        callback(); 
    }

    checkLoc2Value(rule, value, callback){
        let locType = this.props.form.getFieldValue('loc2Type') ;
        let locValue = this.props.form.getFieldValue('loc2Value') ;
        let {flag,msg} = CommonUtil.checkGeoLocl(locValue,locType) ;
        if(!flag){
            callback(msg);
        }else{
            callback();
        }
    }


    checkTravelStartDate(rule, value, callback){
        if (!value) {
            callback();
        } else {
            const form = this.props.form;
            let now = this.getTodayDate() ;
            if(value<now){
                callback([new Error('起始日期必须大于当前日期')]);
            }else{
                //强制结束日期校验travelStartDate
                form.validateFields(['travelEndDate'], { force: true });
                callback();
            }
        }
    }

    checkTravelEndDate(rule, value, callback){
        if(!value){
           callback(); 
        }else{
            const form = this.props.form;
            let now = this.getTodayDate() ;
            if(value<now){
                 callback([new Error('结束日期必须大于当前日期')]);
            }else{
                //截止日期必须大于起始日期的判断
                let startDate = this.props.form.getFieldValue('travelStartDate') ;
                if(startDate>value){
                    callback([new Error('结束日期必须大于起始日期')]);
                }else{//如果校验通过，则触发起始日期的校验
                    callback();
                }
            }
        }
    }


    //当区域type改变的时候，修改区域value值
    handleChangeLocType(name){
        let _self = this ;
        return function(){
            _self.props.form.setFieldsValue({[name]:""}) ;
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
                {validator:this.checkSaleStartDate}
            ],
        }) ;
        let saleEndDateField = getFieldProps('saleEndDate',{
            initialValue:'',
            rules: [
                { required: true },
                {validator:this.checkSaleEndDate}
            ],
        }) ;
        let loc1TypeField = getFieldProps('loc1Type',{
            onChange:this.handleChangeLocType('loc1Value'),
            rules:[
                {validator:this.checkLoc1Type}
            ]
        }) ;
        let loc1ValueField = getFieldProps('loc1Value',{
            rules:[
                {validator:this.checkLoc1Value.bind(this)}
            ]
        }) ;
        let loc2TypeField = getFieldProps('loc2Type',{
            onChange:this.handleChangeLocType('loc2Value'),
            rules:[
                {validator:this.checkLoc2Type.bind(this)}
            ]
        }) ;
        let loc2ValueField = getFieldProps('loc2Value',{
            rules:[
                {validator:this.checkLoc2Value.bind(this)}
            ]
        }) ;
        let geoLimitField = getFieldProps('geoLimit',{
            initialValue:['Pear','Orange']
        }) ;
        let travelStartDateField = getFieldProps('travelStartDate',{
            rules:[
                {validator:this.checkTravelStartDate.bind(this)}
            ]
        }) ;
        let travelEndDateField = getFieldProps('travelEndDate',{
            rules:[
                {validator:this.checkTravelEndDate.bind(this)}
            ]
        }) ;
        let descrField = getFieldProps('descr',{
            initialValue:''
        })
        //区域下拉框
        const geoOptions = geoList.map((opt) => <Option key={opt.value} value ={opt.value}>{opt.name}</Option>);

        return (
            <div className ="container">
                <Form id ="myForm" horizontal  >
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

                                <FormItem {...formItemLayout}  label="品牌集名称" hasFeedback>
                                    <Input  {...brandGroupNameField} />
                                </FormItem>

                                 <FormItem {...formItemLayout} label="销售日期">
                                    <Col span="11">
                                        <FormItem>
                                            <DatePicker {...saleStartDateField} style={{width:"100%"}} />
                                        </FormItem>
                                    </Col>
                                    <Col span="2">
                                        <p className="ant-form-split">-</p>
                                    </Col>
                                    <Col span="11">
                                        <FormItem>
                                            <DatePicker {...saleEndDateField} style={{width:"100%"}} />
                                        </FormItem>
                                    </Col>
                                    
                                </FormItem>

                                 <FormItem {...formItemLayout}  label="区域1">
                                    <Col span="11">
                                        <FormItem>
                                           <Select {...loc1TypeField} placeholder="Please select a country">
                                                {geoOptions}
                                            </Select>
                                        </FormItem>
                                    </Col>
                                    <Col span="2">
                                        <p className="ant-form-split">-</p>
                                    </Col>
                                    <Col span="11">
                                        <FormItem>
                                            <Input {...loc1ValueField} />
                                        </FormItem>
                                    </Col>
                                </FormItem>

                                <FormItem {...formItemLayout} label="区域2" >
                                    <Col span="11">
                                        <FormItem>
                                            <Select {...loc2TypeField} placeholder="Please select a country">
                                                {geoOptions}
                                            </Select>
                                        </FormItem>
                                    </Col>
                                    <Col span="2">
                                        <p className="ant-form-split">-</p>
                                    </Col>
                                    <Col span="11">
                                        <FormItem>
                                           <Input {...loc2ValueField} />
                                        </FormItem>
                                    </Col>
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
                                    <Col span="11">
                                        <FormItem>
                                            <DatePicker {...travelStartDateField} style={{width:"100%"}}/>
                                        </FormItem>
                                    </Col>
                                    <Col span="2">
                                        <p className="ant-form-split">-</p>
                                    </Col>
                                   <Col span="11">
                                        <FormItem>
                                            <DatePicker {...travelEndDateField} style={{width:"100%"}} />
                                        </FormItem>
                                    </Col>
                                </FormItem>
                                
                                <Row>
                                    <Col span={3} className="ant-form-item-label">
                                        <label> 发布</label>
                                    </Col>
                                    <Col span={12} >
                                         <Table183 tbname ="list183" />
                                    </Col>
                                </Row>

                                <FormItem {...formItemLayout} label="描述" >
                                    <Input type="textarea" {...descrField} rows={4} />
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