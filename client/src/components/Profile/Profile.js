import React from 'react';
import classes from './Profile.module.css';
import Navigation from './Navigation/Navigation';
import PersonalInfo from './PersonalInfo/PersonalInfo';

export const Profile = () => {
	return (
		<div className={classes.profileWrapper}>
			<Navigation/>
			<PersonalInfo/>
		</div>
	)
};

/* Cтили, прописать компоенты присутствующие в кабинете, и переход по ним. аТак же защита страницы, ( не авт пользователь не может зайти.
* Опрокинуть данные пользователя - не получается т.к. компонент отрисосывается раньше чем приходят данные. Необходимо отрисовыывать тогда, когда придут нужные данные из props
* <Fragment/>
* </Redirect>
* прочитать про эти компоненты. Идея
* сделать защищенные роуты, когда пользователь не зареган - не пускать на страницу кабинета и др. страницы
* */
