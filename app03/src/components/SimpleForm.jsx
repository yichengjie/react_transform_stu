import React from 'react'
import {Field,reduxForm} from 'redux-form'
const  { DOM: { input, select, textarea } } = React

const validation = (values) => {
	let error = {}
	if(!values.firstname) {
		error.firstname = "This is a required Field"
	}
	return error
}

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))
/*
const asyncValidate = (values) =>
	new Promise((resolve,reject) => setTimeout( ()=> {
		if(['devarsh','harsh','ayush','nirali'].includes(values.firstname)) {
			reject({firstname:'name already taken'})
		}
		else
		{
			resolve()
		}
	},1000))
*/
var cnt=0
const asyncValidate = (values) =>
{
	console.log('I am called outside submit',++cnt)
	return sleep(1000).then(() => {
		console.log('I am called inside submit',++cnt)
		if(['devarsh','harsh','ayush','nirali'].includes(values.firstname)) {
			throw {firstname:'name already taken'}
		}
	})
}

const MyComponent = asyncValidating => props => {

	return (
	<div>
	<input {...props} />
	{props.touched && props.error && <span>{props.error}</span>}
	{asyncValidating === props.name && <span>Async Validating</span> }
	</div>)
}

const SimpleForm = ({asyncValidating,handleSubmit,pristine, reset, submitting}) => {
	return (
		<form onSubmit={handleSubmit}>
			<Field name="firstname" component={MyComponent(asyncValidating)} type="text" placeholder="Enter firstNamde"  />
			<Field name="lastname" component={MyComponent(asyncValidating)} type="text" placeholder="Enter lastName"  />
			<button type="submit" disabled={submitting}>Submit</button>
		</form>
	)
}

export default reduxForm({
	form : 'SimpleForm',
	validate : validation,
	asyncValidate,
  	asyncBlurFields:['firstname']
})(SimpleForm)
