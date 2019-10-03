import React from 'react'
import styled from 'styled-components'

import { useSpring, animated } from 'react-spring'
import { NavLink } from 'react-router-dom'
import { goFromCollapseMenu, handleNavbar } from '../../actions/generalActions'
import { connect } from 'react-redux'
// debugger

const CollapseMenu = (props) => {
	const { open } = useSpring({ open: props.navbarState ? 0 : 1 })

	const onLinkClick = (where) => {
		props.goFromCollapseMenu(where)
	}

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
					<li><NavLink to="/yummy/cakes" onClick={() => { onLinkClick('cakes') }}>CAKES</NavLink></li>
					<li><NavLink to="/yummy/tarts" onClick={() => { onLinkClick('tarts') }}>TARTS</NavLink></li>
					<li><NavLink to="/yummy/cupcakes" onClick={() => { onLinkClick('cupcakes') }}>CUPCAKES</NavLink></li>
					<li><NavLink to="/yummy/cookies" onClick={() => { onLinkClick('cookies') }}>COOKIES</NavLink></li>
					<li><NavLink to="/yummy/desserts" onClick={() => { onLinkClick('desserts') }}>DESSERTS</NavLink></li>
					<li><NavLink to="/yummy/macaroons" onClick={() => { onLinkClick('macaroons') }}>MACAROONS</NavLink></li>
					<li><NavLink to="/cart" onClick={() => { props.handleNavbar(false) }}>CART</NavLink></li>
				</NavLinks>
			</CollapseWrapper>
		)
	}
	return null
}

const mapStateToProps = state => {
	return {
		navbarState: state.general.navbar
	}
}
export default connect(mapStateToProps, { goFromCollapseMenu, handleNavbar })(CollapseMenu)

const CollapseWrapper = styled(animated.div)`
	top: 5.5rem;
	right: 0;
	left: 0;
	min-width: 320px;
	background: #2d3436;
`

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
			color: antiquewhite;
			border-bottom: 1px solid antiquewhite;
		}
	}
`