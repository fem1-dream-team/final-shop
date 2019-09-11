import React from 'react';
import {ContainerSearchLoginPage} from './ContainerSearchLoginPage/ContainerSearchLoginPage'
import {ContainerNavigation} from './ContainerNavigation/ContainerNavigation'
import {Logo} from './Logo';
import {NavLink} from 'react-router-dom';

export const Header = (props) => {
	return (
		<div>
			<ContainerSearchLoginPage/>
			<NavLink to="/home"><Logo/></NavLink>
			<div>
				<ContainerNavigation/>
			</div>
		</div>
	)
}
