import React from 'react';

import {Search} from './Search/Search'
import styled from 'styled-components';
import {NavLink} from 'react-router-dom';
// import {Account} from "./Account/Account";

export const ContainerSearchAccount = (props) => {
	return (
		<div>
			<Container>

				<LogDiv>
					<NavLink to='/account'><img src='img/icons/userAccount.png' alt='account' style={{width: '25px', height: '25 px'}}/></NavLink>
				</LogDiv>
				<SearchDiv>
					<Search/>
				</SearchDiv>
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
const SearchDiv = styled.div`
	margin-right: 25px;
	margin-left: 25px;
`
const LogDiv = styled.div`
	margin-right: 25px;
	margin-left: 25px;
`
