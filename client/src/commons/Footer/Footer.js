import React from 'react';
import {Grid} from '@material-ui/core';
import logo from "../../commons/Header/logoImages/logo.png"
import {StdP, StdLogo, StdLogoWrapper, StdFooter, StdLi, StdNavLink} from './FooterStyles';
// Std = styled

export const Footer = () => {
	return (
		<StdFooter container component="footer" justify="space-evenly" alignItems="center">
			<Grid item>
				<StdP> Вт-Сб з 10:00 до 20:00 </StdP>
				<StdP> +38 (073) 123 45 67</StdP>
				<StdP> вул. Богдана Хмельницького, 16-22 </StdP>
				<StdP> Київ </StdP>
			</Grid>
			<Grid item>
				<StdNavLink exact to="/">
					<StdLogoWrapper>
						<StdLogo src={logo} alt="bakery logo"/>
					</StdLogoWrapper>
				</StdNavLink>
			</Grid>
			<Grid item>
				<Grid container component="nav" justify="space-between" spacing={3}>
					<Grid item component="ul">
						<StdLi>
							<StdNavLink to="/seazon"> Сезонні тарти </StdNavLink>
						</StdLi>
						<StdLi>
							<StdNavLink to="/seazon"> Сезонні тарти </StdNavLink>
						</StdLi>
						<StdLi>
							<StdNavLink to="/seazon"> Сезонні тарти </StdNavLink>
						</StdLi>
						<StdLi>
							<StdNavLink to="/seazon"> Сезонні тарти </StdNavLink>
						</StdLi>
					</Grid>
					<Grid item component="ul">
						<StdLi>
							<StdNavLink to="/seazon"> Сезонні тарти </StdNavLink>
						</StdLi>
						<StdLi>
							<StdNavLink to="/seazon"> Сезонні тарти </StdNavLink>
						</StdLi>
						<StdLi>
							<StdNavLink to="/seazon"> Сезонні тарти </StdNavLink>
						</StdLi>
						<StdLi>
							<StdNavLink to="/seazon"> Сезонні тарти </StdNavLink>
						</StdLi>
					</Grid>
				</Grid>
			</Grid>
		</StdFooter>
	);
};
