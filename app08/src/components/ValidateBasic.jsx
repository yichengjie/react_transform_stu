import React from 'react' ;
import { Button, Form, Input } from 'antd';
const createForm = Form.create;
const FormItem = Form.Item;

function noop() {
  return false;
}

let BasicDemo = React.createClass({

  handleReset(e) {
    e.preventDefault();
    this.props.form.resetFields();
    //this.setState({"name":""}) ;
    this.props.resetAllFileds() ;
  },

  handleSubmit(e) {
    e.preventDefault();
    this.props.form.validateFields((errors, values) => {
      if (errors) {
        console.log('Errors in form!!!');
        return;
      }
      console.log('Submit!!!');
      console.log(values);
    });
  },


  // getInitialState: function() {
  //   return {name: "yicj"};
  // },
  handleInputChange (event) {
    let target =event.target ;
    let name = target.name ;
    let value = target.value ;
    let param = {[name]:{value}} ;
    this.props.updateFieldValue(param) ;
  },

  render() {
    const { getFieldProps, getFieldError, isFieldValidating } = this.props.form;
    const insuranceProps = getFieldProps('insurance');
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
        >
          <Input {...insuranceProps} min={0} />
        </FormItem>

        <FormItem
          {...formItemLayout}
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


BasicDemo = createForm(
  function onFieldsChange(props, field) {
     props.onFieldsChange(field);
  },
  function  mapPropsToFields(props) {
    console.info(props.fields) ;
     return props.fields;
  }
)(BasicDemo);

export default BasicDemo ;
