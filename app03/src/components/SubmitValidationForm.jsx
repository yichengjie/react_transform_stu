import React from 'react'
import { Field, reduxForm } from 'redux-form'
import submit from './submit'

const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type}/>
      {touched && error && <span>{error}</span>}
    </div>
  </div>
)

const SubmitValidationForm = (props) => {
  const {fields: {username, password}, handleSubmit} = props;
  return (
    <form onSubmit={handleSubmit(submit)}>
      <input type="text" placeholder="First Name" {...username} autocomplete="off"/>
      <input type="password" placeholder="First Name" {...password} autocomplete="off"/>
      <div>
        <button type="submit">Log In</button>
        <button type="button">Clear Values</button>
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'submitValidation',  // a unique identifier for this form
  fields: ['username', 'password'] // all the fields in your form
})(SubmitValidationForm)
