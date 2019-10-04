import React from 'react';

// import Grid from '@material-ui/core/Grid';
import styled from 'styled-components';

import LoginPage from './ContainerSearchLoginPage/LoginPage/UserIcon';
import {Search} from './ContainerSearchLoginPage/Search/Search'

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
	justify: space-between;
	alignItems: center;
	flexWrap: nowrap;
	height: 5vh;
	background-color: #95d6bf;
`;