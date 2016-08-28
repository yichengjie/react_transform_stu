import React from 'react';
import { createForm } from 'rc-form';
import { regionStyle, errorStyle } from './styles';
@createForm()
class SimpleForm extends React.Component {
  constructor(props){
    super(props) ;
    this.state={
      normal:'hello world'
    } ;
  }
  submit = () => {
    this.props.form.validateFields((error, value) => {
      console.log(error, value);
      console.info('--------------------') ;
      console.info(this.state) ;
    });
  }
  handleInputChange = (e) =>{
    console.info(e.target.value) ;
    let value = e.target.value ;
    this.setState({normal:value}) ;
  }
  render() {
    let errors ;
    const {getFieldProps, getFieldError} = this.props.form;
    return (<div>
      <input {...getFieldProps('normal',{
         initialValue: this.state.normal,
         onChange:this.handleInputChange
      })} />
      <input {...getFieldProps('required', {
        initialValue:'',
        rules: [{required: true}],
      })}  />
      <div style={errorStyle}>
        {(errors = getFieldError('required')) ? errors.join(',') : null}
      </div>
      <button onClick={this.submit}>submit</button>
    </div>)
  }
}

export default SimpleForm ;
