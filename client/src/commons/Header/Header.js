import React from 'react';

// import Grid from '@material-ui/core/Grid';
import styled from 'styled-components';

import LoginPage from './ContainerSearchLoginPage/LoginPage/UserIcon';
import Search from './ContainerSearchLoginPage/Search/Search'

export const Header = (props) => {
	return (
		<Container>
			<LoginPage/>
			<Search/>
		</Container>
	)
};

const Container = styled.div`
	display: flex;
	flex-wrap: nowrap;
	align-items: center;
	justify-content: space-between;
	height: 5vh;
	background-color: #95d6bf;
`;