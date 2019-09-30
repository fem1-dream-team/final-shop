import React from 'react';
import styled from 'styled-components';

const Burgermenu = (props) => {
	const showMenu = () => {
		props.handleNavbar(!props.navbarState)
	}

	return (
		<Wrapper onClick={showMenu}>
			<div className={ props.navbarState ? 'open' : '' }>
				<span>&nbsp;</span>
				<span>&nbsp;</span>
				<span>&nbsp;</span>
			</div>
		</Wrapper>
	);
};

export default Burgermenu;

const Wrapper = styled.div`
	position: absolute;
	top: 5px;
	right: 10px;
	display: block;
	padding-top: .7rem;
	cursor: pointer;

	& span {
		position: relative;
		display: block;
		width: 3.5rem;
		height: .4rem;
		margin-bottom: .7rem;
		background: #fdcb6e;
		transition: all ease-in-out .2s;
	}

	.open span:nth-child(2) {
		opacity: 0;
	}

	.open span:nth-child(3) {
		top: -11px;
		transform: rotate(45deg);
	}

	.open span:nth-child(1) {
		top: 11px;
		transform: rotate(-45deg);
	}

`;