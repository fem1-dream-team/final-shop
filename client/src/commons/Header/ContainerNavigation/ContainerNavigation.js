import React from 'react';
import styled from 'styled-components';
import {NavLink} from 'react-router-dom';
import s from './ConteinerNavigation.module.css'

export const ContainerNavigation = () => {
	return (
		<div>
			<Container>
				<ContainerLogo>
					<NavLink to="/"><StyledLinkLogoImg src='img/logoImages/logoCakeWhite.png' alt='logoCake'/></NavLink>
					<NavLink to="/"><StyledLinkLogoText src='img//logoImages/textLogoWhite.png' alt='textLogo'/></NavLink>
				</ContainerLogo>
				<ContainerNav>
					<div>
						<div className={s.item}>
							<NavLink activeClassName={s.active} to="/products">
								<div>Products</div>
							</NavLink>
						</div>
					</div>
					<div className={s.item}>
						<NavLink activeClassName={s.active} to="/cakes">Сakes</NavLink>
					</div>
					<div className={s.item}>
						<NavLink activeClassName={s.active} to="/customOrders">Custom orders</NavLink>
					</div>
					<div className={s.item}>
						<NavLink activeClassName={s.active} to="/weddingCakes">Weddings cakes</NavLink>
					</div>
					<div className={s.item}>
						<NavLink activeClassName={s.active} to="/cart">Cart</NavLink>
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
	width: 600px;

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
