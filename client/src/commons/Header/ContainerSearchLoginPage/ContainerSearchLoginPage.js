import React from 'react';

import {Search} from './Search/Search'
import styled from 'styled-components';
import LoginPage from './LoginPage';

export const ContainerSearchLoginPage = (props) => {
	return (
		<div>
			<Container>
				 <LogDiv>
					 <LoginPage/>
				 </LogDiv>
				<SearchDiv>
					<Search/>
				</SearchDiv>
			</Container>
		</div>
	)
};

const Container = styled.div`
	display: flex;
	justify-content: space-between;
	height: 27px;
	background-color: #95d6bf;
`;
const SearchDiv = styled.div`
	margin-right: 25px;
	margin-left: 25px;
`;
const LogDiv = styled.div`
	margin-right: 25px;
	margin-left: 25px;
`;