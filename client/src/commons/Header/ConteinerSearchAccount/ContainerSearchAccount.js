import React from 'react';

import {Search} from './Search/Search'
import styled from 'styled-components';
import account from './userAccount.png'
import {NavLink} from "react-router-dom";
//import {Account} from "./Account/Account";

export const ContainerSearchAccount = (props) => {
    return (
            <div>
                <Container>

                        <LogDiv>
                            <NavLink to='/account'><img src={account} alt='account' style={{width: '25px', height: '25 px'}}/></NavLink>
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
    background-color: #95d6bf;
    height: 27px;
    
`;
const SearchDiv = styled.div`
    margin-left: 25px;
    margin-right: 25px;
`
const LogDiv = styled.div`
    margin-left: 25px;
    margin-right: 25px;
`
