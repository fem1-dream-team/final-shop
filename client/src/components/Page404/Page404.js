import React from 'react';
import {connect} from 'react-redux';

const mapStateToProps = state => {
	return state
}

export const Page404 = connect(mapStateToProps, {})((props) => {
	console.log(props);
	return (
		<div>
			Ooops, can't find that page.
			ERROR 404
		</div>
	);
});
