import React from 'react';
import s from './cakes.module.css'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Container, Grid } from '@material-ui/core';
import { NavLink } from 'react-router-dom'

export const CakeDescription = (props) => {
	return (
		<div>
			<CardMedia
				id={props.id}
				image={props.image}
				component="img"
				alt="Product image not found"
				height="140"
				title="Contemplative Reptile"
			/>
			<CardContent>
				<Typography gutterBottom variant="h5" component="h2">
					{props.name}
				</Typography>
				<Typography variant="body2" color="textSecondary" component="p">
					{props.description}
				</Typography>
			</CardContent>
		</div>
	)
}

const CakeProductCard = (props) => {
	return (
		<Card className="div" >
			<CardActionArea>
				<CakeDescription
					id= {props.id}
					name={props.name}
					image={props.image}
					description={props.description}
				/>
			</CardActionArea>
			<CardActions>
				<NavLink to={`/cakes/buy/${props.id}`}>
					<Button size="small" color="primary">
					BUY
					</Button>
				</NavLink>
				<Button size="small" color="primary">
					DETAILS
				</Button>
			</CardActions>
		</Card>
	)
}

export const Cakes = () => {
	const	cakes = [
		{
			id: 1,
			image: 'img/cakes/1.jpg',
			name: 'Souffle cake with blueberries',
			description: "We discovered the classic message with a saber, weighed the Kurdish recipe for P'Пr Erme, who snapped up on the Swiss meringue.",
			price: 30,
		},
		{
			id: 2,
			image: 'img/cakes/2.jpg',
			name: 'Chocolate cake',
			description: "We discovered the classic message with a saber, weighed the Kurdish recipe for P'Пr Erme, who snapped up on the Swiss meringue.",
			price: 30,
		},
		{
			id: 3,
			image: 'img/cakes/3.jpg',
			name: 'Biscuit cake with berry filling',
			description: "We discovered the classic message with a saber, weighed the Kurdish recipe for P'Пr Erme, who snapped up on the Swiss meringue.",
			price: 30,
		},
		{
			id: 4,
			image: 'img/cakes/4.jpg',
			name: 'Strawberry Cake',
			description: "We discovered the classic message with a saber, weighed the Kurdish recipe for P'Пr Erme, who snapped up on the Swiss meringue.",
			price: 30,
		},
		{
			id: 5,
			image: 'img/cakes/5.jpg',
			name: 'Cake with figs',
			description: "We discovered the classic message with a saber, weighed the Kurdish recipe for P'Пr Erme, who snapped up on the Swiss meringue.",
			price: 30,
		},
		{
			id: 6,
			image: 'img/cakes/6.jpg',
			name: 'Raspberry and strawberry cake',
			description: "We discovered the classic message with a saber, weighed the Kurdish recipe for P'Пr Erme, who snapped up on the Swiss meringue.",
			price: 30,
		},
		{
			id: 7,
			image: 'img/cakes/7.jpg',
			name: 'Yogurt and berry cake',
			description: "We discovered the classic message with a saber, weighed the Kurdish recipe for P'Пr Erme, who snapped up on the Swiss meringue.",
			price: 30,
		},
		{
			id: 8,
			image: 'img/cakes/8.jpg',
			name: 'Chocolate berry cake',
			description: "We discovered the classic message with a saber, weighed the Kurdish recipe for P'Пr Erme, who snapped up on the Swiss meringue.",
			price: 30,
		},
		{
			id: 9,
			image: 'img/cakes/9.jpg',
			name: 'Cake with apricot filling and oreo cookies',
			description: "We discovered the classic message with a saber, weighed the Kurdish recipe for P'Пr Erme, who snapped up on the Swiss meringue.",
			price: 30,
		},
		{
			id: 10,
			image: 'img/cakes/10.jpg',
			name: "Author's cake with exotic fruits",
			description: "We discovered the classic message with a saber, weighed the Kurdish recipe for P'Пr Erme, who snapped up on the Swiss meringue.",
			price: 30,
		},
		{
			id: 11,
			image: 'img/cakes/11.jpg',
			name: 'The souffle cake is decorated with berries and cookies',
			description: "We discovered the classic message with a saber, weighed the Kurdish recipe for P'Пr Erme, who snapped up on the Swiss meringue.",
			price: 30,
		},
		{
			id: 12,
			image: 'img/cakes/12.jpg',
			name: 'Classic napoleon decorated with seasonal berries',
			description: "We discovered the classic message with a saber, weighed the Kurdish recipe for P'Пr Erme, who snapped up on the Swiss meringue.",
			price: 30,
		},
	]

	const CakesElements = cakes
		.map(cake => {
			return (
				<Grid item component="div" sm={3}>
					<CakeProductCard
						id= {cake.id}
						image={cake.image}
						name={cake.name}
						description={cake.description}
						price={cake.price}
					/>
				</Grid>
			)
		})
	return (
		<div>
			<div className={s.container}>
				<p className={s.text}>
					Make a Bittersweet cake part of your celebration tradition – because a party without a cake is just a meeting and share the joy with friends and family!
				</p>
			</div>
			<Container>
				<p></p>
				<Grid container component="div" direction="row" justify='space-between' spacing={4}>
					{ CakesElements }
				</Grid>
				<p></p>
			</Container>
		</div>
	);
};