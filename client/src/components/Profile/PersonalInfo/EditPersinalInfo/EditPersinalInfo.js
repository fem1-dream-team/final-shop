import React, {Fragment} from 'react';
import classes from './EditPersinalInfo.module.css';
import {Field, reduxForm} from 'redux-form';
import {connect} from 'react-redux';
// import {compose} from 'redux';
import TextField from '@material-ui/core/TextField';
// import asyncValidate from './asyncValidate'

const mapStateToProps = state => ({
	initialValues: state.auth.customer
})

const validate = values => {
	const errors = {};
	const requiredFields = [
		'first_name',
		'last_name',
		'email',
	];
	requiredFields.forEach(field => {
		if (!values[field]) {
			errors[field] = 'Required'
		}
	})
	if (
		values.email &&
		!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
	) {
		errors.email = 'Invalid email address'
	}
	return errors
}

const normalizePhone = value => {
	if (!value) {
		return value
	}
	const onlyNums = value.replace(/[^\d]/g, '')
	if (onlyNums.length <= 3) {
		return onlyNums
	}
	if (onlyNums.length <= 7) {
		return `${onlyNums.slice(0, 3)}-${onlyNums.slice(3)}`
	}
	return `${onlyNums.slice(0, 3)}-${onlyNums.slice(3, 5)}-${onlyNums.slice(5, 7)}-${onlyNums.slice(7, 10)}`
}

const renderTextField = ({label, input, meta: { touched, invalid, error }, ...custom}) => (
	<TextField
		placeholder={label}
		error={touched && invalid}
		helperText={touched && error}
		{...input}
		{...custom}
		fullWidth
		variant="outlined"
	/>
)

/* const radioButton = ({ input, ...rest }) => (
	<FormControl>
		<RadioGroup {...input} {...rest}>
			<FormControlLabel value="female" control={<Radio />} label="Female" />
			<FormControlLabel value="male" control={<Radio />} label="Male" />
		</RadioGroup>
	</FormControl>
) */

let EditPersonalInfo = (props) => {
	const { handleSubmit, submitting } = props;
	return (
		<Fragment>
			<h3 className={classes.item}>Edit your personal info</h3>
			<form onSubmit={handleSubmit}>
				<div className={classes.item}>
					<label>
						First name
						<Field
							name='first_name'
							component={renderTextField}
							label="First name"
						/>
					</label>
				</div>
				<div className={classes.item}>
					<label>
						Last name
						<Field
							name='last_name'
							component={renderTextField}
							label="Last name"
						/>
					</label>
				</div>
				<div className={classes.item}>
					<label>
						Email
						<Field
							name='email'
							component={renderTextField}
							label="Email"
							placeholder='Email'
						/>
					</label>
				</div>
				<div className={classes.item}>
					<label>
						Phone number
						<Field
							name='tel'
							component={renderTextField}
							label="Telephone"
							normalize={normalizePhone}
						/>
					</label>
				</div>
				<div className={classes.item}>
					<label>Sex</label>
					<div className={classes.item}>
						<div className={classes.itemRadio}>
							<label>
								<Field name="sex" component="input" type="radio" value="male" />{' '}
								Male
							</label>
						</div>
						<div className={classes.itemRadio}>
							<label>
								<Field name="sex" component="input" type="radio" value="female" />{' '}
								Female
							</label>
						</div>

					</div>
				</div>
				<div className={classes.item}>
					<label>Date of birth
						<Field
							name="birth"
							component={renderTextField}
							label="DD MM YYYY"
							type="date"
						/>
					</label>
				</div>
				<div className={classes.item}>
					<label>Delivery adress
						<Field
							name='adress'
							component={renderTextField}
							label="Adress"
							placeholder='Adress'
						/>
					</label>
				</div>
				<button className={classes.button} onClick={() => { alert('HI') }} type='submit' disabled={submitting} >Save changes</button>
			</form>
		</Fragment>
	)
};

EditPersonalInfo = reduxForm({
	form: 'editForm',
	enableReinitialize: true,
	validate,
})(EditPersonalInfo)

EditPersonalInfo = connect(mapStateToProps, {})(EditPersonalInfo)

export default EditPersonalInfo;
