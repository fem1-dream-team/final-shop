import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom'

export const Cart = () => {
	return (
		<Container>
			<h1>YOUR CART</h1>
			<span>Your cart is empty.</span>
			<LinkDiv to='/'><DivButton>CONTINUE BROWSING HERE</DivButton></LinkDiv>
		</Container>
	)
}

const Container = styled.div`
display: flex;
flex-direction: column;
	margin: 0 auto;
	color: black; 
	font-size: 16px;
	text-align: center;
	vertical-align: center;
`
const DivButton = styled.div`
	width: 250px;
	margin: 35px auto;
	padding: 15px 20px;
	color: white;
	background-color: #f186a0;
	border-radius: 10px;
`
const LinkDiv = styled(NavLink)`
	text-decoration: none;
`