import React from 'react'
import styled from 'styled-components';
import {NavLink} from 'react-router-dom';

import logo from '../../images/logo/logoCakeWhite.png';
import logo2 from '../../images/logo/textLogoWhite.png';
import CollapseMenu from './CollapseMenu';

const Brand = () => {
	return (
		<div>
			<NavLink to="/"><Image src={logo} alt="Company Logo" /></NavLink>
			<NavLink to="/"><Image src={logo2} alt="Company Logo" /></NavLink>
			<CollapseMenu/>
		</div>
	)
};

export default Brand

const Image = styled.img`
	height: 85%;
	margin: auto 0;
	font-size: 62.5%;
	cursor: pointer;
`;