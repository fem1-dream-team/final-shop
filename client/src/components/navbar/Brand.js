import React from 'react'
import styled from 'styled-components';
import {NavLink} from 'react-router-dom';

import logo from '../../images/logo/logoCakeWhite.png';
import logo2 from '../../images/logo/textLogoWhite.png';

const Brand = () => {
	return (
		<Container>
			<StyleLinkFirst to="/"><LogoImg src={logo} alt="Company Logo" /></StyleLinkFirst>
			<StyleLink to="/"><LogoTxt src={logo2} alt="Company Logo" /></StyleLink>
		</Container>
	)
};

export default Brand

const LogoImg = styled.img`
position: relative;
top: 3px;
width: 90%
	//; width: 100%;
height: 90%
`
const LogoTxt = styled.img`
position: relative;
top: 5px;
right: 10px
`
// const Image = styled.img`
// 	// height: 85%;
// 	// width: 80%;
// 	margin: auto 0;
// 	// font-size: 62.5%;
// 	cursor: pointer;
// `;
const Container = styled.div`
	display: flex;
	width: 200px;
`;
const StyleLinkFirst = styled(NavLink)`
	width: 110px
`
const StyleLink = styled(NavLink)`
	align-self: center;
`