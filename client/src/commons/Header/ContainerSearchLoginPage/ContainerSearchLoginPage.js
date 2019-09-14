import React from 'react';
import { Search } from './Search/Search'
import styled from 'styled-components';
import account from './userLoginPage.png'
import {NavLink} from 'react-router-dom';

export const ContainerSearchLoginPage = (props) => {
	return (
		<div>
			<Container>

				<LogDiv>
					<NavLink to='/account'><img src={account} alt='account' style={{width: '25px', height: '25 px'}}/></NavLink>
				</LogDiv>
				<Search/>
			</Container>
		</div>
	)
}

const Container = styled.div`
	display: flex;
	justify-content: space-between;
	height: 27px;
	background-color: #95d6bf;  
`;
const LogDiv = styled.div`
	margin-left: 38px;
`
