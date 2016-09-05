import React ,{Component}from 'react' ;
import { Button, Form, Input ,Row, Col,Table, Icon ,Card,DatePicker} from 'antd';
const createForm = Form.create;
const FormItem = Form.Item;
import PubSub from 'pubsub-js' ;
import {SUBMITFROM_EVENT,RESETFROM_EVENT} from '../constants/constant.js' ;
import autobind from 'autobind-decorator' ;
import Table196 from '../containers/Table196.js' ;
const RangePicker = DatePicker.RangePicker;

const disabledDate = function (current) {
  // can not select days before today
  return current && current.getTime() < Date.now();
};
function onChange(value, dateString) {
  console.log('From: ', value[0], ', to: ', value[1]);
  console.log('From: ', dateString[0], ', to: ', dateString[1]);
}

function noop() {
  return false;
}
let token = null ;
let resetToken = null ;
//let BasicDemo = React.createClass({
class BasicDemo extends Component {
  constructor(props) {
    super(props) ;
    //发布事件监听
    token = PubSub.subscribe( SUBMITFROM_EVENT, this.handleSubmit );
    resetToken = PubSub.subscribe(RESETFROM_EVENT,this.handleReset)  ;
  }
  @autobind
  handleReset(e) {
    //e.preventDefault();
    this.props.form.resetFields();
  }
  @autobind
  handleSubmit(e) {
    var jqFlag = this.jq_validator.form() ;
    //e.preventDefault();
    this.props.form.validateFields((errors, values) => {
      if (errors) {
        console.log('Errors in form!!!');
        return;
      }
      if(jqFlag){
        console.log('Submit!!!');
        console.log(values);
      }else{
        console.info('子表数据还有错误，请修改！') ;
      }
    });
  }
  componentDidMount(){
    //注册jquery validate框架
    //对表单注册校验
    var validator = $("#myForm").validate({meta:""});
    this.jq_validator = validator ;
  }

  componentWillUnmount(){
    //销毁事件订阅
    PubSub.unsubscribe( token );
    PubSub.unsubscribe(resetToken) ;
    this.jq_validator = null ;
  }


  render() {
    const { getFieldProps, getFieldError, isFieldValidating } = this.props.form;
    const insuranceProps = getFieldProps('insurance',{
      rules: [
        { required: true, min: 5, message: '最小5个字符' },
        { required: true, max: 6, message: '最多6个字符' },
        { validator: this.userExists },
      ],
    });
    const propertyTaxProps = getFieldProps('propertyTax');
    const formItemLayout = {
      labelCol: { span: 4 },
      wrapperCol: { span: 12 },
    };

    const startDateProps = getFieldProps('startDate') ;
    const endDateProps = getFieldProps('endDate') ;
    const rangeDate = getFieldProps('rangeDate') ;


    return (
      <Form horizontal id ="myForm">

        <Card>
          <FormItem
              {...formItemLayout}
              label="姓名"
              hasFeedback
              help={isFieldValidating('insurance') ? 'validating...' : (getFieldError('insurance') || []).join(', ')}
            >
             <Input {...insuranceProps} min={0} />
          </FormItem>

          <FormItem
              {...formItemLayout}
              hasFeedback
              label="描述"
            >
              <Input {...propertyTaxProps} min={0} />
          </FormItem>
          <Row>
            <Col>
                <Col span={12} offset={4}>
                    <Table196 tbname ="list196"/>
                </Col>
            </Col>
          </Row>
        </Card>
        <br/>
         <Card>
            <FormItem
              {...formItemLayout}
              hasFeedback
              label="起始日期"
            >
              <DatePicker {...startDateProps} format ="yyyy-MM-dd HH:mm:ss" showTime ={true}/>
          </FormItem>

          <FormItem
              {...formItemLayout}
              hasFeedback
              label="结束日期"
            >
              <DatePicker {...endDateProps} 
                format ="yyyy-MM-dd HH:mm:ss" 
                showTime ={true}
                disabledDate={disabledDate} 
              />
          </FormItem>

          <FormItem 
           {...formItemLayout}
              hasFeedback
              label="日期范围"
          >
            <RangePicker 
              format="yyyy-MM-dd"
              {...rangeDate}
              style={{ width: 184 }} 
              />
          </FormItem>
           
         </Card>

      </Form>
    );
  }
}
//});
function onFieldsChange(props, field) {
   props.onFieldsChange(field);
}
function  mapPropsToFields(props) {
   return props.fields;
}
BasicDemo = createForm({onFieldsChange,mapPropsToFields})(BasicDemo);
export default BasicDemo ;
