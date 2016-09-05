import React from 'react' ;
import { Select, Radio, Checkbox, Button, DatePicker, TimePicker, InputNumber, Form, Cascader, Icon } from 'antd';
const Option = Select.Option;
const RadioGroup = Radio.Group;
const createForm = Form.create;
const FormItem = Form.Item;

let Demo = React.createClass({
  componentDidMount() {
    this.props.form.setFieldsValue({
      eat: true,
      sleep: true,
      beat: true,
    });
  },

  handleReset(e) {
    e.preventDefault();
    this.props.form.resetFields();
  },

  handleSubmit(e) {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((errors, values) => {
      if (errors) {
        console.log('Errors in form!!!');
        return;
      }
      console.log('Submit!!!');
      console.log(values);
    });
  },

  checkBirthday(rule, value, callback) {
    if (value && value.getTime() >= Date.now()) {
      callback(new Error("You can't be born in the future!"));
    } else {
      callback();
    }
  },

  checkPrime(rule, value, callback) {
    if (value !== 11) {
      callback(new Error('The prime number between 8 to 12 is obiviously 11!'));
    } else {
      callback();
    }
  },

  render() {
    const address = [{
      value: 'zhejiang',
      label: 'Zhe Jiang',
      children: [{
        value: 'hangzhou',
        label: 'Hang Zhou',
      }],
    }];
    const { getFieldProps } = this.props.form;
    const selectProps = getFieldProps('select', {
      rules: [
        { required: true, message: 'Please select your country' },
      ],
    });
    const multiSelectProps = getFieldProps('multiSelect', {
      rules: [
        { required: true, message: 'Please select your favourite colors', type: 'array' },
      ],
    });
    const radioProps = getFieldProps('radio', {
      rules: [
        { required: true, message: 'Please select your gender' },
      ],
    });
    const birthdayProps = getFieldProps('birthday', {
      rules: [
        {
          required: true,
          type: 'date',
          message: 'When is your birthday?',
        }, {
          validator: this.checkBirthday,
        },
      ],
    });
    const timeProps = getFieldProps('time', {
      getValueFromEvent: (value, timeString) => timeString,
      rules: [
        { required: true, message: 'Please select the time' },
      ],
    });
    const primeNumberProps = getFieldProps('primeNumber', {
      rules: [{ validator: this.checkPrime }],
    });
    const addressProps = getFieldProps('address', {
      rules: [{ required: true, type: 'array' }],
    });
    const formItemLayout = {
      labelCol: { span: 7 },
      wrapperCol: { span: 12 },
    };
    return (
      <Form horizontal >
        <FormItem
          {...formItemLayout}
          label="Country"
        >
          <Select {...selectProps} placeholder="Please select a country" style={{ width: '100%' }}>
            <Option value="china">China</Option>
            <Option value="use">U.S.A</Option>
            <Option value="japan">Japan</Option>
            <Option value="korean">Korea</Option>
            <Option value="Thailand">Thai</Option>
          </Select>
        </FormItem>

        <FormItem
          {...formItemLayout}
          label="Favourite colors"
        >
          <Select {...multiSelectProps} multiple placeholder="Please select favourite colors" style={{ width: '100%' }}>
            <Option value="red">Red</Option>
            <Option value="orange">Orange</Option>
            <Option value="yellow">Yellow</Option>
            <Option value="green">Green</Option>
            <Option value="blue">Blue</Option>
          </Select>
        </FormItem>

        <FormItem
          {...formItemLayout}
          label="Gender"
        >
          <RadioGroup {...radioProps}>
            <Radio value="male">male</Radio>
            <Radio value="female">female</Radio>
          </RadioGroup>
          <span><Icon type="info-circle-o" /> Temporarily does not support ohter gender</span>
        </FormItem>

        <FormItem
          {...formItemLayout}
          label="Hobby"
        >
          <Checkbox {...getFieldProps('eat', {
            valuePropName: 'checked',
          })}>eat</Checkbox>
          <Checkbox {...getFieldProps('sleep', {
            valuePropName: 'checked',
          })}>sleeping</Checkbox>
          <Checkbox {...getFieldProps('beat', {
            valuePropName: 'checked',
          })}>dozen doug</Checkbox>
        </FormItem>

        <FormItem
          {...formItemLayout}
          label="Birthday"
        >
          <DatePicker {...birthdayProps} />
        </FormItem>

        <FormItem
          {...formItemLayout}
          label="Select the time"
        >
          <TimePicker {...timeProps} />
        </FormItem>

        <FormItem
          {...formItemLayout}
          label="A prime number between 8 to 12"
        >
          <InputNumber {...primeNumberProps} min={8} max={12} />
        </FormItem>

        <FormItem
          {...formItemLayout}
          label="Please select address"
        >
          <Cascader {...addressProps} options={address} />
        </FormItem>

        <FormItem
          wrapperCol={{ span: 12, offset: 7 }}
        >
          <Button type="primary" onClick={this.handleSubmit}>OK</Button>
          &nbsp;&nbsp;&nbsp;
          <Button type="ghost" onClick={this.handleReset}>Reset</Button>
        </FormItem>
      </Form>
    );
  },
});

Demo = createForm()(Demo);
export default Demo ;