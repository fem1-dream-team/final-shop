// const validate = values => {
// 	// IMPORTANT: values is an Immutable.Map here!
// 	const errors = {}
// 	if (!values.get('username')) {
// 		errors.username = 'Required'
// 	} else if (values.get('username').length > 15) {
// 		errors.username = 'Must be 15 characters or less'
// 	}
// 	if (!values.get('email')) {
// 		errors.email = 'Required'
// 	} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.get('email'))) {
// 		errors.email = 'Invalid email address'
// 	}
// 	if (!values.get('number')) {
// 		errors.age = 'Required'
// 	} else if (isNaN(Number(values.get('number')))) {
// 		errors.age = 'Must be a number'
// 	}
// 	return errors
// }
//
// export default validate