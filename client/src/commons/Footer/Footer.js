import React from 'react';
import {Grid} from '@material-ui/core';
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
						<StdLogo src='img/logoImages/logo.png' alt="bakery logo"/>
					</StdLogoWrapper>
				</StdNavLink>
			</Grid>
			<Grid item>
				<Grid container component="nav" justify="space-between" spacing={3}>
					<Grid item component="ul">
						<StdLi>
							<StdNavLink to="/tarts"> Тарти  </StdNavLink>
						</StdLi>
						<StdLi>
							<StdNavLink to="/cupcakes"> Капкейки  </StdNavLink>
						</StdLi>
						<StdLi>
							<StdNavLink to="/cookies"> Печиво </StdNavLink>
						</StdLi>
						<StdLi>
							<StdNavLink to="/cakes"> Торти </StdNavLink>
						</StdLi>
						<StdLi>
							<StdNavLink to="/pies"> Пироги </StdNavLink>
						</StdLi>
					</Grid>
					<Grid item component="ul">
						<StdLi>
							<StdNavLink to="/delivery"> Доставка </StdNavLink>
						</StdLi>
						<StdLi>
							<StdNavLink to="/customers"> Особистий кабінет  </StdNavLink>
						</StdLi>
						<StdLi>
							<StdNavLink to="/contacts"> Контакти </StdNavLink>
						</StdLi>
					</Grid>
				</Grid>
			</Grid>
		</StdFooter>
	);
};
