import styled from 'styled-components';
import {Grid} from '@material-ui/core';
import {NavLink} from 'react-router-dom';

// Std = styled
export const StdFooter = styled(Grid)`
max-width: 100%;
background-color: #95d6bf;
`;

export const StdNavLink = styled(NavLink)`
color: black;
font-size: 16px;
text-decoration: none;
`;

export const StdLogoWrapper = styled.div`
display: flex;
align-items: center;
`;

export const StdLogo = styled.img`
width: inherit;
max-height: 20vh;
`;

export const StdLi = styled.li`
padding: 5px 0;
list-style: none
`;

export const StdP = styled.p`
font-size: 14px;
text-align: right;
`;