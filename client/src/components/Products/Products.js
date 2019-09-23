import React, {useState, useEffect} from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Container, Grid } from '@material-ui/core';
import s from './cakes.module.css'

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
							<Typography gutterBottom variant="h5" component="h2">
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
						<Button size="small" color="primary">
							Buy
						</Button>
						<Button size="small" color="primary">
							Details
						</Button>
					</CardActions>
				</Card>
			</Grid>
		)
	});

	const getProductsList = async () => {
		let response;
		if (props.category === 'search') {
			// eslint-disable-next-line no-restricted-globals
			const q = window.location.search.split('q=')[1] ? location.search.split('q=')[1] : '';
			response = await fetch('http://localhost:3001/api/search?q=' + q);
		} else {
			response = await fetch('http://localhost:3001/api/getData/category/' + props.category);
		}
		const responseJSON = await response.json();
		setProductsList(responseJSON.data);
	};

	useEffect(() => {
		getProductsList()
		// eslint-disable-next-line
	}, []);

	return (
		<Container>
			<div className={s.container}>
				<h1 className={s.text}>{props.category}</h1>
			</div>
			<Grid container component="div" direction="row" justify='flex-start' spacing={4}>
				{products}
			</Grid>
		</Container>
	);
};