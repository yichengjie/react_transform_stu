import React from 'react' ;
import { Button, Form, Input, Row, Col } from 'antd';
import classNames from 'classnames';
import './ValidateCustomized.css' ;
const createForm = Form.create;
const FormItem = Form.Item;

function noop() {
  return false;
}

let Demo = React.createClass({
  getInitialState() {
    return {
      dirty: false,
      passBarShow: false, // Whether to display a tooltip of password strength
      rePassBarShow: false,
      passStrength: 'L', // Password strength
      rePassStrength: 'L',
    };
  },

  handleSubmit() {
    this.props.form.validateFields((errors, values) => {
      if (errors) {
        console.log('Errors in form!!!');
        return;
      }
      console.log('Submit!!!');
      console.log(values);
    });
  },

  getPassStrenth(value, type) {
    if (value) {
      let strength;
      // Customized the password strength, here is just a simple example
      if (value.length < 6) {
        strength = 'L';
      } else if (value.length <= 9) {
        strength = 'M';
      } else {
        strength = 'H';
      }
      this.setState({
        [`${type}BarShow`]: true,
        [`${type}Strength`]: strength,
      });
    } else {
      this.setState({
        [`${type}BarShow`]: false,
      });
    }
  },

  checkPass(rule, value, callback) {
    const form = this.props.form;
    this.getPassStrenth(value, 'pass');
    if (form.getFieldValue('pass') && this.state.dirty) {
      form.validateFields(['rePass'], { force: true });
    }
    callback();
  },

  checkPass2(rule, value, callback) {
    const form = this.props.form;
    this.getPassStrenth(value, 'rePass');

    if (value && value !== form.getFieldValue('pass')) {
      callback('Two passwords you enter is inconsistent!');
    } else {
      callback();
    }
  },

  renderPassStrengthBar(type) {
    const strength = type === 'pass' ? this.state.passStrength : this.state.rePassStrength;
    const classSet = classNames({
      'ant-pwd-strength': true,
      'ant-pwd-strength-low': strength === 'L',
      'ant-pwd-strength-medium': strength === 'M',
      'ant-pwd-strength-high': strength === 'H',
    });
    const level = {
      L: 'Low',
      M: 'Middle',
      H: 'High',
    };

    return (
      <div>
        <ul className={classSet}>
          <li className="ant-pwd-strength-item ant-pwd-strength-item-1" />
          <li className="ant-pwd-strength-item ant-pwd-strength-item-2" />
          <li className="ant-pwd-strength-item ant-pwd-strength-item-3" />
          <span className="ant-form-text">
            {level[strength]}
          </span>
        </ul>
      </div>
    );
  },

  render() {
    const { getFieldProps } = this.props.form;

    const passProps = getFieldProps('pass', {
      rules: [
        { required: true, whitespace: true, message: 'Please enter your password' },
        { validator: this.checkPass },
      ],
      onChange: (e) => {
        console.log('Your password is stolen in this way', e.target.value);
      },
    });
    const rePassProps = getFieldProps('rePass', {
      rules: [{
        required: true,
        whitespace: true,
        message: 'Please confirm your password',
      }, {
        validator: this.checkPass2,
      }],
    });
    return (
      <div>
        <Form  style={{ maxWidth: 600 }} >
          <Row type="flex" align="middle">
            <Col span={12}>
              <FormItem label="Password">
                <Input {...passProps} type="password"
                  onContextMenu={noop} onPaste={noop} onCopy={noop} onCut={noop}
                  autoComplete="off" id="pass"
                  onBlur={(e) => {
                    const value = e.target.value;
                    this.setState({ dirty: this.state.dirty || !!value });
                  }}
                />
              </FormItem>
            </Col>
            <Col span={12}>
              {this.state.passBarShow ? this.renderPassStrengthBar('pass') : null}
            </Col>
          </Row>
          <Row type="flex" align="middle">
            <Col span={12}>
              <FormItem label="Confirm">
                <Input {...rePassProps} type="password"
                  onContextMenu={noop} onPaste={noop} onCopy={noop} onCut={noop}
                  autoComplete="off" id="rePass"
                />
              </FormItem>
            </Col>
            <Col span={12}>
              {this.state.rePassBarShow ? this.renderPassStrengthBar('rePass') : null}
            </Col>
          </Row>
          <FormItem><Button type="primary" onClick={this.handleSubmit}>提交</Button></FormItem>
        </Form>
      </div>
    );
  },
});

Demo = createForm()(Demo);

export default Demo ;