import React from 'react';
import { createForm } from 'rc-form';

@createForm()
class SimpleForm extends React.Component {
  constructor(props){
    super(props) ;
    this.state ={
      normal:"hello world",
      required:'test'
    } ;
  }

  handleChange(value,t){
    console.info(value,t) ;
  }
  // constructor() {
  //     super();
  // }
  submit = () => {
    this.props.form.validateFields((error, value) => {
      console.log(error, value);
    });
  }

  render() {
    let errors;
    const {getFieldProps, getFieldError} = this.props.form;
    return (<div>
      <input {...getFieldProps('normal',{
        onChange:this.handleChange
      })} value={this.state.normal}/>
      <input {...getFieldProps('required', {
        rules: [{required: true}],
      })}  value ={this.state.required}/>
      {(errors = getFieldError('required')) ? errors.join(',') : null}
      <button onClick={this.submit}>submit</button>
    </div>)
  }
}

export default SimpleForm ;
