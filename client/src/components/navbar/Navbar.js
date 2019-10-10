import React from 'react'
import styled from 'styled-components'
import { useSpring, animated, config } from 'react-spring'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'

import Brand from './Brand'
import BurgerMenu from './BurgerMenu'
import CollapseMenu from './CollapseMenu'
import {getProductCategories} from '../../actions/productsActions'

export const Navbar = (props) => {
	const barAnimation = useSpring({
		from: { transform: 'translate3d(0, -10rem, 0)' },
		transform: 'translate3d(0, 0, 0)',
	})

	const linkAnimation = useSpring({
		from: { transform: 'translate3d(0, 30px, 0)', opacity: 0 },
		to: { transform: 'translate3d(0, 0, 0)', opacity: 1 },
		delay: 800,
		config: config.wobbly,
	})

	return (
		<div>
			<NavBar style={barAnimation}>
				<FlexContainer>
					<Brand/>
					<NavLinks style={linkAnimation}>
						<NavLink to="/yummy/cakes" onClick={() => { props.getProductCategories('cakes') }}>CAKES</NavLink>
						<NavLink to="/yummy/candies" onClick={() => { props.getProductCategories('candies') }}>CANDIES</NavLink>
						<NavLink to="/yummy/cupcakes" onClick={() => { props.getProductCategories('cupcakes') }}>CUPCAKES</NavLink>
						<NavLink to="/yummy/cookies" onClick={() => { props.getProductCategories('cookies') }}>COOKIES</NavLink>
						<NavLink to="/yummy/desserts" onClick={() => { props.getProductCategories('desserts') }}>DESSERTS</NavLink>
						<NavLink to="/yummy/macaroons" onClick={() => { props.getProductCategories('macaroons') }}>MACAROONS</NavLink>
					</NavLinks>
					<BurgerMenu/>
				</FlexContainer>
			</NavBar>
			<CollapseMenu/>
		</div>
	)
}

const mapStateToProps = () => {
	return {}
}

export default connect(mapStateToProps, {getProductCategories })(Navbar)

const NavBar = styled(animated.nav)`
	position: relative;
	top: 0;
	left: 0;
	z-index: 1;
	width: 100%;
	height: 10vh;
	background-color: #2d3436;
`

const FlexContainer = styled.div`
	display: flex;
	justify-content: space-between;
	box-sizing: inherit;
	max-width: 120rem;
	height: 10vh;
	margin: auto;
	padding: 0 2rem;
`

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

	@media (max-width: 990px) {
		display: none;
	}
}
`
