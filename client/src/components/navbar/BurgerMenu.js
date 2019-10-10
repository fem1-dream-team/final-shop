import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux'
import { handleNavbar } from '../../actions/generalActions'
// debugger
const Burgermenu = (props) => {
	const showMenu = () => {
		props.handleNavbar(!props.navbarState)
	}

	return (
		<Wrapper onClick={showMenu}>
			<div className={ props.navbarState ? 'open' : '' }>
				<span>&nbsp;</span>
				<CentralSpan>&nbsp;</CentralSpan>
				<span>&nbsp;</span>
			</div>
		</Wrapper>
	);
};

const mapStateToProps = state => {
	return {
		navbarState: state.general.navbar
	}
}
export default connect(mapStateToProps, {handleNavbar})(Burgermenu);

const CentralSpan = styled.span`
	margin: 10px 0;
`
const Wrapper = styled.div`
	display: flex;
	align-items: center;
	cursor: pointer;
	@media (min-width: 990px) {
		display: none;
	}

	& span {
		position: relative;
		display: block;
		width: 50px;
		height: 5px;
		background: #fdcb6e;
		transition: all ease-in-out .2s;
	}
	
	.open span:nth-child(2) {
		opacity: 0;
	}

	.open span:nth-child(3) {
		top: -15px;
		transform: rotate(45deg);
	}

	.open span:nth-child(1) {
		top: 15px;
		transform: rotate(-45deg);
	}

`;