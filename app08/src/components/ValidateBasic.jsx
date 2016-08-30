import React from 'react' ;
import { Button, Form, Input } from 'antd';
const createForm = Form.create;
const FormItem = Form.Item;
import PubSub from 'pubsub-js' ;

function noop() {
  return false;
}

let BasicDemo = React.createClass({



  handleReset(e) {
    e.preventDefault();
    this.props.form.resetFields();
  },

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
  },
  componentDidMount(){
    setTimeout(function(){
      this.props.fetchFieldsUpdate(
        {"insurance":"hello world",propertyTax:"test"}
      ) ;
    }.bind(this),2000) ;
    var token = PubSub.subscribe( 'MY TOPIC', this.handleSubmit );
  },

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

        <FormItem wrapperCol={{ span: 12, offset: 7 }}>
          <Button type="primary" onClick={this.handleSubmit}>OK</Button>
          &nbsp;&nbsp;&nbsp;
          <Button type="ghost" onClick={this.handleReset}>Reset</Button>
        </FormItem>
      </Form>
    );
  },
});

function onFieldsChange(props, field) {
   props.onFieldsChange(field);
}
function  mapPropsToFields(props) {
   return props.fields;
}
BasicDemo = createForm({onFieldsChange,mapPropsToFields})(BasicDemo);
export default BasicDemo ;
