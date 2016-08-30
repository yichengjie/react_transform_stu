import React ,{Component}from 'react' ;
import { Button, Form, Input ,Row, Col,Table, Icon } from 'antd';
const createForm = Form.create;
const FormItem = Form.Item;
import PubSub from 'pubsub-js' ;
import {SUBMITFROM_EVENT,RESETFROM_EVENT} from '../constants/constant.js' ;
import autobind from 'autobind-decorator' ;
import './table.css' ;


const columns = [{
  title: '姓名',
  dataIndex: 'name',
  key: 'name',
  render: (text) => <a href="#">{text}</a>,
}, {
  title: '年龄',
  dataIndex: 'age',
  key: 'age',
}, {
  title: '住址',
  dataIndex: 'address',
  key: 'address',
}, {
  title: '操作',
  key: 'operation',
  render: (text, record) => (
    <span>
      <a href="#">操作一{record.name}</a>
      <span className="ant-divider" />
      <a href="#">操作二</a>
      <span className="ant-divider" />
      <a href="#" className="ant-dropdown-link">
        更多 <Icon type="down" />
      </a>
    </span>
  ),
}];



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
    //e.preventDefault();
    this.props.form.validateFields((errors, values) => {
      if (errors) {
        console.log('Errors in form!!!');
        return;
      }
      console.log('Submit!!!');
      console.log(values);
    });
  }
  componentDidMount(){
    setTimeout(function(){
      this.props.fetchFieldsUpdate(
        {"insurance":"hello world",propertyTax:"test"}
      ) ;
    }.bind(this),2000) ;
  }

  componentWillUnmount(){
    //销毁事件订阅
    PubSub.unsubscribe( token );
    PubSub.unsubscribe(resetToken) ;
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
      labelCol: { span: 7 },
      wrapperCol: { span: 12 },
    };
    return (
      <Form horizontal>
        <FormItem
          {...formItemLayout}
          label="Insurance"
          hasFeedback
          help={isFieldValidating('insurance') ? 'validating...' : (getFieldError('insurance') || []).join(', ')}
        >
          <Input {...insuranceProps} min={0} />
        </FormItem>

        <FormItem
          {...formItemLayout}
          hasFeedback
          label="Property Tax"
        >
          <Input {...propertyTaxProps} min={0} />
        </FormItem>

        {/* <FormItem wrapperCol={{ span: 12, offset: 7 }}>
          <Button type="primary" onClick={this.handleSubmit}>OK</Button>
          &nbsp;&nbsp;&nbsp;
          <Button type="ghost" onClick={this.handleReset}>Reset</Button>
        </FormItem> */}
        <Row>
          <Col>
              <Col span={7}></Col>
              <Col span={12}>
                <Table columns={columns} dataSource={this.props.subTableList} />
              </Col>
          </Col>
        </Row>

        <Row>
          <Col>
              <Col span={7}></Col>
              <Col span={12}>
                  <div className="table_layout"  style={{width:"500px"}}>
                      <table>
                          <thead>
                            <tr>
                                <th width="100">市场方RBD</th>
                                <th width="100">承运方RBD</th>
                                <th width="100">市场方服务等级</th>
                                <th width="100">承运方服务等级</th>
                            </tr>
                          </thead>
                          <tbody>
                             <tr>
                              <td><Input type ="text"/></td>
                              <td><Input type ="text"/></td>
                              <td><Input type ="text"/></td>
                              <td><Input type ="text"/></td>
                            </tr>
                          </tbody>
                      </table>
                  </div>
              </Col>
          </Col>
        </Row>
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
