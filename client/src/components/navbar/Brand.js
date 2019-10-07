import React from 'react'
import styled from 'styled-components';
import {NavLink} from 'react-router-dom';

import logo from '../../images/logo/logoCakeWhite.png';
import logo2 from '../../images/logo/textLogoWhite.png';

const Brand = () => {
	return (
		<Container>
			<StyleLinkFirst to="/"><Image src={logo} alt="Company Logo" /></StyleLinkFirst>
			<StyleLink to="/"><Image src={logo2} alt="Company Logo" /></StyleLink>
		</Container>
	)
};

export default Brand

const Image = styled.img`
	height: 85%;
	margin: auto 0;
	cursor: pointer;
`;
const Container = styled.div`
	display: flex;
	width: 200px;

`;
const StyleLinkFirst = styled(NavLink)`
	width: 110px;

`
const StyleLink = styled(NavLink)`
	align-self: center;

`