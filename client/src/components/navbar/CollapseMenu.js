import React from 'react';
import styled from 'styled-components';

import { useSpring, animated } from 'react-spring';

const CollapseMenu = (props) => {
	const { open } = useSpring({ open: props.navbarState ? 0 : 1 });

	if (props.navbarState === true) {
		return (
			<CollapseWrapper style={{
				transform: open.interpolate({
					// eslint-disable-next-line
					range: [0, .2, .3, 1],
					output: [0, -20, 0, -200],
				}).interpolate(openValue => `translate3d(0, ${openValue}px, 0`),
			}}
			>
				<NavLinks>
					<li><a href="/cakes" onClick={props.handleNavbar}>CAKES</a></li>
					<li><a href="/tarts" onClick={props.handleNavbar}>TARTS</a></li>
					<li><a href="/cupcakes" onClick={props.handleNavbar}>CUPCAKES</a></li>
					<li><a href="/cookies" onClick={props.handleNavbar}>COOKIES</a></li>
					<li><a href="/desserts" onClick={props.handleNavbar}>DESSERTS</a></li>
					<li><a href="/macaroons" onClick={props.handleNavbar}>MACAROONS</a></li>
					<li><a href="/cart" onClick={props.handleNavbar}>CART</a></li>
				</NavLinks>
			</CollapseWrapper>
		);
	}
	return null;
};

export default CollapseMenu;

const CollapseWrapper = styled(animated.div)`
	top: 5.5rem;
	right: 0;
	left: 0;
	min-width: 320px;
	background: #2d3436;
`;

const NavLinks = styled.ul`
	padding: 2rem 1rem 2rem 2rem;
	list-style-type: none;

	& li {
		transition: all 300ms linear 0s;
	}

	& a {
		color: #dfe6e9;
		font-size: 1.4rem;
		line-height: 2;
		text-transform: uppercase;
		text-decoration: none;
		cursor: pointer;

		&:hover {
			color: #fdcb6e;
			border-bottom: 1px solid #fdcb6e;
		}
	}
`;