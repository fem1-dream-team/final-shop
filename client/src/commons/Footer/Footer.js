import React from 'react';
import {Grid} from '@material-ui/core';
import logo from '../../commons/Header/logo.png'
import {StdP, StdLogo, StdLogoWrapper, StdFooter, StdLi, StdNavLink} from './FooterStyles';
import { connect } from 'react-redux'
import { getProductCategories } from '../../actions/productsActions'
// Std = styled

const Footer = (props) => {
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
							<StdNavLink to="/cakes" onClick={() => { props.getProductCategories('/cakes') }}> Cakes </StdNavLink>
						</StdLi>
						<StdLi>
							<StdNavLink to="/tarts" onClick={() => { props.getProductCategories('/tarts') }}> Tarts </StdNavLink>
						</StdLi>
						<StdLi>
							<StdNavLink to="/cupcakes" onClick={() => { props.getProductCategories('/cupcakes') }}> Cupcakes </StdNavLink>
						</StdLi>
					</Grid>
					<Grid item component="ul">
						<StdLi>
							<StdNavLink to="/cookies" onClick={() => { props.getProductCategories('/cookies') }}> Cookies </StdNavLink>
						</StdLi>
						<StdLi>
							<StdNavLink to="/desserts" onClick={() => { props.getProductCategories('/desserts') }}> Desserts </StdNavLink>
						</StdLi>
						<StdLi>
							<StdNavLink to="/macaroons" onClick={() => { props.getProductCategories('/macaroons') }}> Macaroons </StdNavLink>
						</StdLi>
					</Grid>
				</Grid>
			</Grid>
		</StdFooter>
	);
};

const mapStateToProps = () => {
	return {}
}

export default connect(mapStateToProps, {getProductCategories })(Footer)