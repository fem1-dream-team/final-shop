import React from 'react';
import styled from 'styled-components';

export const Logo = () => {
	return (
		<Container>
			<img src='img//logoImages/logo.png' alt='LOGO' width="180" height="180"/>
		</Container>
	)
};

const Container = styled.div`
	width: 180px;
	margin: 0 auto;
`
