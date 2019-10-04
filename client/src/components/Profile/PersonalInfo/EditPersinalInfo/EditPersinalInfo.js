import React, {Fragment} from 'react';
// import classes from './EditPersinalInfo.module.css';
import {Field, reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import {compose} from 'redux';

const mapStateToProps = (state) => {
	return {
		initialValues: {
			first_name: state.auth.customer.first_name,
			last_name: state.auth.customer.last_name,
			email: state.auth.customer.email,

		}
	}
}

const upper = value => value && value.toUpperCase();

const EditPersonalInfo = (props) => {
	const { handleSubmit } = props;
	console.log(props);
	return (
		<Fragment>
			<form onSubmit={handleSubmit}>
				<div>
					<Field
						name='first_name'
						component='input'
						type='text'
						placeholder='First Name'
					/>
				</div>
				<div>
					<Field
						name='last_name'
						component='input'
						type='text'
						placeholder='Last Name'
					/>
				</div>
				<div>
					<Field
						name='email'
						component='input'
						type='text'
						placeholder='Email'
					/>
				</div>
				<div>
					<Field
						name='tel'
						component='input'
						type='text'
						placeholder='Telephone'
						normalize={upper}
					/>
				</div>
				<div>
					<Field
						name='sex'
						component='input'
						type='text'
						placeholder='Enter your sex'
					/>
				</div>
				<div>
					<Field
						name='birth'
						component='input'
						type='text'
						placeholder='Date of birth'
					/>
				</div>
				<div>
					<Field
						name='adress'
						component='input'
						type='text'
						placeholder='Adress'
					/>
				</div>
				<button type='submit'>send</button>
			</form>
		</Fragment>
	)
}

export default compose(connect(mapStateToProps, {}), reduxForm({
	form: 'editProfoleForm',
	onSubmit: values => console.log('sended', values),
}),
)(EditPersonalInfo);
