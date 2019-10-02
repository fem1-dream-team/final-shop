import React from 'react';
import classes from './Profile.module.css';
import Navigation from './Navigation/Navigation';
import PersonalInfo from './PersonalInfo/PersonalInfo';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

const mapStateToProps = state => {
	return {
		isAuth: state.auth.isAuth,
		first_name: state.auth.customer.first_name,
		last_name: state.auth.customer.last_name
	}
}

export const Profile = connect(mapStateToProps)(withRouter(props => {
	console.log(props);

	return (
		<div className={classes.profileWrapper}>
			<Navigation/>
			<PersonalInfo props={props}/>
		</div>
	);
}));

/* Cтили, прописать компоенты присутствующие в кабинете, и переход по ним. аТак же защита страницы, ( не авт пользователь не может зайти.
* Опрокинуть данные пользователя - не получается т.к. компонент отрисосывается раньше чем приходят данные. Необходимо отрисовыывать тогда, когда придут нужные данные из props
* <Fragment/>
* </Redirect>
* прочитать про эти компоненты. Идея
* сделать защищенные роуты, когда пользователь не зареган - не пускать на страницу кабинета и др. страницы
* */
