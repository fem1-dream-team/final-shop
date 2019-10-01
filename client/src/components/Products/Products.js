import React, {useState, useEffect} from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Container, Grid } from '@material-ui/core';
import s from './category.module.css'
import BasketProductsContainer from '../BuyProductCart/BasketProducts/BasketProductsContainer'
//import { NavLink } from 'react-router-dom'

export const Products = (props) => {
	const [productsList, setProductsList] = useState([]);

	const products = productsList.map((item) => {
		return (
			<Grid item component="div" sm={3} key={item._id} spacing={4}>
				<Card className="div">
					<CardActionArea>
						<CardMedia
							component="img"
							alt="Product image not found"
							height="140"
							image={item.image}
							title="Contemplative Reptile"
						/>
						<CardContent>
							<Typography gutterBottom variant="h5" component="h2" className={s.name}>
								{item.name}
							</Typography>
							<Typography variant="body2" color="textSecondary" component="p">
								{item.description}
							</Typography>
							<Typography gutterBottom variant="h8" component="h2">
								{item.price} UAH
							</Typography>
						</CardContent>
					</CardActionArea>
					<CardActions>
						<BasketProductsContainer
							id={item._id}
							image={item.image}
							name={item.name}
							description={item.description}
							price={item.price}
						/>
{/* <NavLink to={`/details/${item.category}/${item._id}`}> */}
						<Button size="small" color="primary">
							<p className={s.btnDetails}>Details</p>
						</Button>
{/* </NavLink> */}
					</CardActions>
				</Card>
			</Grid>
		)
	});

	const getProductsList = async () => {
		let response;
		if (props.category === 'search') {
			//eslint-disable-next-line no-restricted-globals
			const q = window.location.search.split('q=')[1] ? location.search.split('q=')[1] : '';
			response = await fetch('/api/search?q=' + q);
		} else {
			response = await fetch('/api/getData/category/' + props.category);
		}
		const responseJSON = await response.json();
		setProductsList(responseJSON.data);
	};

	useEffect(() => {
		getProductsList()
		//eslint-disable-next-line
	}, []);

	return (
		<Container>
			<div className={s.container}>
				<h1 className={s.text}>{props.category}</h1>
			</div>
			<Grid container component="div" direction="row" justify='flex-start' spacing={4}>
				{products}
			</Grid>
			<p></p>
		</Container>
	);
};