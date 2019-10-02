import React from 'react'
import styled from 'styled-components';
import { useSpring, animated, config } from 'react-spring';

import Brand from './Brand';
import BurgerMenu from './BurgerMenu';
import CollapseMenu from './CollapseMenu';

import {NavLink} from 'react-router-dom';

const Navbar = (props) => {
	const barAnimation = useSpring({
		from: { transform: 'translate3d(0, -10rem, 0)' },
		transform: 'translate3d(0, 0, 0)',
	});

	const linkAnimation = useSpring({
		from: { transform: 'translate3d(0, 30px, 0)', opacity: 0 },
		to: { transform: 'translate3d(0, 0, 0)', opacity: 1 },
		delay: 800,
		config: config.wobbly,
	});

	return (
		<div>

			<NavBar style={barAnimation}>

				<FlexContainer>
					<Brand />
					<NavLinks style={linkAnimation}>
						<NavLink to="/cakes">CAKES</NavLink>
						<NavLink to="/tarts">TARTS</NavLink>
						<NavLink to="/cupcakes">CUPCAKES</NavLink>
						<NavLink to="/cookies">COOKIES</NavLink>
						<NavLink to="/desserts">DESSERTS</NavLink>
						<NavLink to="/macaroons">MACAROONS</NavLink>
						<NavLink to="/cart">CART</NavLink>
					</NavLinks>
					<BurgerWrapper>
						<BurgerMenu
							navbarState={props.navbarState}
							handleNavbar={props.handleNavbar}
						/>
					</BurgerWrapper>
				</FlexContainer>
			</NavBar>
			<CollapseMenu
				navbarState={props.navbarState}
				handleNavbar={props.handleNavbar}
			/>
		</div>
	)
};

export default Navbar

const NavBar = styled(animated.nav)`
	position: relative;
	top: 0;
	left: 0;
	z-index: 1;
	width: 100%;
	font-size: 1.4rem;
	background: #2d3436;
`;

const FlexContainer = styled.div`
	display: flex;;
	justify-content: space-between;
	max-width: 120rem;
	height: 5rem;
	margin: auto;
	padding: 0 2rem;
`;

const NavLinks = styled(animated.ul)`
justify-self: end;
margin: auto 0;
list-style-type: none;

& a {
	margin: 0 1.5rem;
	color: #dfe6e9;
	font-weight: 600;
	text-transform: uppercase;
	text-decoration: none;
	border-bottom: 1px solid transparent;
	cursor: pointer;
	transition: all 300ms linear 0s;

	&:hover {
		color: #fdcb6e;
		border-bottom: 1px solid #fdcb6e;
	}

	@media (max-width: 768px) {
		display: none;
	}
}
`;

const BurgerWrapper = styled.div`
	margin: auto 0;  

	@media (min-width: 769px) {
		display: none;
	}
`;