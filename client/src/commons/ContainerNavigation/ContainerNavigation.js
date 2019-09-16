import React from 'react';
import styled from 'styled-components';
import {NavLink} from 'react-router-dom';
import s from './ConteinerNavigation.module.css'
import logoCakeWhite from './logoImages/logoCakeWhite.png'
import textLogoWhite from './logoImages/textLogoWhite.png'

export const ContainerNavigation = () => {
	return (
		<div>
			<Container>
				<ContainerLogo>
					<NavLink to="/"><StyledLinkLogoImg src={logoCakeWhite} alt='logoCake'/></NavLink>
					<NavLink to="/"><StyledLinkLogoText src={textLogoWhite} alt='textLogo'/></NavLink>
				</ContainerLogo>
				<ContainerNav>
					<div>
						<div className={s.item}>
							<NavLink activeClassName={s.active} to="/cakes">
								<div>CAKES</div>
							</NavLink>
						</div>
					</div>
					<div className={s.item}>
						<NavLink activeClassName={s.active} to="/tarts">TARTS</NavLink>
					</div>
					<div className={s.item}>
						<NavLink activeClassName={s.active} to="/cupcakes">CUPCAKES</NavLink>
					</div>
					<div className={s.item}>
						<NavLink activeClassName={s.active} to="/macaroons">MACAROONS</NavLink>
					</div>
					<div className={s.item}>
						<NavLink activeClassName={s.active} to="/desserts">DESSERTS</NavLink>
					</div>
					<div className={s.item}>
						<NavLink activeClassName={s.active} to="/cart">CART</NavLink>
					</div>
				</ContainerNav>
			</Container>
		</div>
	)
}

const Container = styled.div`
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: space-around;
	height: 45px;
	color: #f186a0;
	font-size: 14px;
	background-color: #331a13;  
  
`
const ContainerNav = styled.div`
	display: flex;
	justify-content: space-between;
	width: 740px;

`
const ContainerLogo = styled.div`
	align-self: center;
     `

const StyledLinkLogoImg = styled.img`
	width: 45px;
	height: 45px;
`

const StyledLinkLogoText = styled.img`
	width: 110px;
	height: 40px;
	margin-top: 5px;
`
