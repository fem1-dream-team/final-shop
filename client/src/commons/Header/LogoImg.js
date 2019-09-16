import React from 'react';
import logo from './logo.png'
import styled from 'styled-components';

export const LogoImg = () => {
	return (
		<Container>
			<img src={logo} alt='LOGO' width="180" height="180" display="block"/>
		</Container>
	)
};

const Container = styled.div`
	width: 180px;
	margin: 0 auto;
`
