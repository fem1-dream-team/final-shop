import React from 'react';
import s from './cookies.module.css'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Container, Grid } from '@material-ui/core';
import { NavLink } from 'react-router-dom'

export const CookiesDescription = (props) => {
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

const CookiesProductCard = (props) => {
	return (
		<Card className="div" >
			<CardActionArea>
				<CookiesDescription
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

export const Cookies = () => {
	const	cookies = [
		{
			id: 1,
			image: 'img/cookies/1.jpg',
			name: 'Souffle cake with blueberries',
			description: "We discovered the classic message with a saber, weighed the Kurdish recipe for P'Пr Erme, who snapped up on the Swiss meringue.",
			price: 30,
		},
		{
			id: 2,
			image: 'img/cookies/2.jpg',
			name: 'Chocolate cake',
			description: "We discovered the classic message with a saber, weighed the Kurdish recipe for P'Пr Erme, who snapped up on the Swiss meringue.",
			price: 30,
		},
		{
			id: 3,
			image: 'img/cookies/3.jpg',
			name: 'Biscuit cake with berry filling',
			description: "We discovered the classic message with a saber, weighed the Kurdish recipe for P'Пr Erme, who snapped up on the Swiss meringue.",
			price: 30,
		},
		{
			id: 4,
			image: 'img/cookies/4.jpg',
			name: 'Strawberry Cake',
			description: "We discovered the classic message with a saber, weighed the Kurdish recipe for P'Пr Erme, who snapped up on the Swiss meringue.",
			price: 30,
		},
		{
			id: 5,
			image: 'img/cookies/5.jpg',
			name: 'Cake with figs',
			description: "We discovered the classic message with a saber, weighed the Kurdish recipe for P'Пr Erme, who snapped up on the Swiss meringue.",
			price: 30,
		},
		{
			id: 6,
			image: 'img/cookies/6.jpg',
			name: 'Raspberry and strawberry cake',
			description: "We discovered the classic message with a saber, weighed the Kurdish recipe for P'Пr Erme, who snapped up on the Swiss meringue.",
			price: 30,
		},
		{
			id: 7,
			image: 'img/cookies/7.jpg',
			name: 'Yogurt and berry cake',
			description: "We discovered the classic message with a saber, weighed the Kurdish recipe for P'Пr Erme, who snapped up on the Swiss meringue.",
			price: 30,
		},
		{
			id: 8,
			image: 'img/cookies/8.jpg',
			name: 'Chocolate berry cake',
			description: "We discovered the classic message with a saber, weighed the Kurdish recipe for P'Пr Erme, who snapped up on the Swiss meringue.",
			price: 30,
		},
		{
			id: 9,
			image: 'img/cookies/9.jpg',
			name: 'Cake with apricot filling and oreo cookies',
			description: "We discovered the classic message with a saber, weighed the Kurdish recipe for P'Пr Erme, who snapped up on the Swiss meringue.",
			price: 30,
		},
		{
			id: 10,
			image: 'img/cookies/10.jpg',
			name: "Author's cake with exotic fruits",
			description: "We discovered the classic message with a saber, weighed the Kurdish recipe for P'Пr Erme, who snapped up on the Swiss meringue.",
			price: 30,
		},
		{
			id: 11,
			image: 'img/cookies/11.jpg',
			name: 'The souffle cake is decorated with berries and cookies',
			description: "We discovered the classic message with a saber, weighed the Kurdish recipe for P'Пr Erme, who snapped up on the Swiss meringue.",
			price: 30,
		},
		{
			id: 12,
			image: 'img/cookies/12.jpg',
			name: 'Classic napoleon decorated with seasonal berries',
			description: "We discovered the classic message with a saber, weighed the Kurdish recipe for P'Пr Erme, who snapped up on the Swiss meringue.",
			price: 30,
		},
		{
			id: 13,
			image: 'img/cookies/13.jpg',
			name: 'Classic napoleon decorated with seasonal berries',
			description: "We discovered the classic message with a saber, weighed the Kurdish recipe for P'Пr Erme, who snapped up on the Swiss meringue.",
			price: 30,
		},
		{
			id: 14,
			image: 'img/cookies/14.jpg',
			name: 'Classic napoleon decorated with seasonal berries',
			description: "We discovered the classic message with a saber, weighed the Kurdish recipe for P'Пr Erme, who snapped up on the Swiss meringue.",
			price: 30,
		},
		{
			id: 15,
			image: 'img/cookies/15.jpg',
			name: 'Classic napoleon decorated with seasonal berries',
			description: "We discovered the classic message with a saber, weighed the Kurdish recipe for P'Пr Erme, who snapped up on the Swiss meringue.",
			price: 30,
		},
		{
			id: 16,
			image: 'img/cookies/16.jpg',
			name: 'Classic napoleon decorated with seasonal berries',
			description: "We discovered the classic message with a saber, weighed the Kurdish recipe for P'Пr Erme, who snapped up on the Swiss meringue.",
			price: 30,
		},
		{
			id: 17,
			image: 'img/cookies/17.jpg',
			name: 'Classic napoleon decorated with seasonal berries',
			description: "We discovered the classic message with a saber, weighed the Kurdish recipe for P'Пr Erme, who snapped up on the Swiss meringue.",
			price: 30,
		},
		{
			id: 18,
			image: 'img/cookies/18.jpg',
			name: 'Classic napoleon decorated with seasonal berries',
			description: "We discovered the classic message with a saber, weighed the Kurdish recipe for P'Пr Erme, who snapped up on the Swiss meringue.",
			price: 30,
		},
		{
			id: 19,
			image: 'img/cookies/19.jpg',
			name: 'Classic napoleon decorated with seasonal berries',
			description: "We discovered the classic message with a saber, weighed the Kurdish recipe for P'Пr Erme, who snapped up on the Swiss meringue.",
			price: 30,
		},
		{
			id: 20,
			image: 'img/cookies/20.jpg',
			name: 'Classic napoleon decorated with seasonal berries',
			description: "We discovered the classic message with a saber, weighed the Kurdish recipe for P'Пr Erme, who snapped up on the Swiss meringue.",
			price: 30,
		},
		{
			id: 21,
			image: 'img/cookies/21.jpg',
			name: 'Classic napoleon decorated with seasonal berries',
			description: "We discovered the classic message with a saber, weighed the Kurdish recipe for P'Пr Erme, who snapped up on the Swiss meringue.",
			price: 30,
		},
		{
			id: 22,
			image: 'img/cookies/22.jpg',
			name: 'Classic napoleon decorated with seasonal berries',
			description: "We discovered the classic message with a saber, weighed the Kurdish recipe for P'Пr Erme, who snapped up on the Swiss meringue.",
			price: 30,
		},
		{
			id: 23,
			image: 'img/cookies/23.jpg',
			name: 'Classic napoleon decorated with seasonal berries',
			description: "We discovered the classic message with a saber, weighed the Kurdish recipe for P'Пr Erme, who snapped up on the Swiss meringue.",
			price: 30,
		},
		{
			id: 24,
			image: 'img/cookies/24.jpg',
			name: 'Classic napoleon decorated with seasonal berries',
			description: "We discovered the classic message with a saber, weighed the Kurdish recipe for P'Пr Erme, who snapped up on the Swiss meringue.",
			price: 30,
		},
		{
			id: 25,
			image: 'img/cookies/25.jpg',
			name: 'Classic napoleon decorated with seasonal berries',
			description: "We discovered the classic message with a saber, weighed the Kurdish recipe for P'Пr Erme, who snapped up on the Swiss meringue.",
			price: 30,
		},
		{
			id: 26,
			image: 'img/cookies/26.jpg',
			name: 'Classic napoleon decorated with seasonal berries',
			description: "We discovered the classic message with a saber, weighed the Kurdish recipe for P'Пr Erme, who snapped up on the Swiss meringue.",
			price: 30,
		},
		{
			id: 27,
			image: 'img/cookies/27.jpg',
			name: 'Classic napoleon decorated with seasonal berries',
			description: "We discovered the classic message with a saber, weighed the Kurdish recipe for P'Пr Erme, who snapped up on the Swiss meringue.",
			price: 30,
		},
		{
			id: 28,
			image: 'img/cookies/28.jpg',
			name: 'Classic napoleon decorated with seasonal berries',
			description: "We discovered the classic message with a saber, weighed the Kurdish recipe for P'Пr Erme, who snapped up on the Swiss meringue.",
			price: 30,
		},
		{
			id: 29,
			image: 'img/cookies/29.jpg',
			name: 'Classic napoleon decorated with seasonal berries',
			description: "We discovered the classic message with a saber, weighed the Kurdish recipe for P'Пr Erme, who snapped up on the Swiss meringue.",
			price: 30,
		},
		{
			id: 30,
			image: 'img/cookies/30.jpg',
			name: 'Classic napoleon decorated with seasonal berries',
			description: "We discovered the classic message with a saber, weighed the Kurdish recipe for P'Пr Erme, who snapped up on the Swiss meringue.",
			price: 30,
		},
	]

	const CookiesElements = cookies
		.map(cookie => {
			return (
				<Grid item component="div" sm={3}>
					<CookiesProductCard
						id= {cookie.id}
						image={cookie.image}
						name={cookie.name}
						description={cookie.description}
						price={cookie.price}
					/>
				</Grid>
			)
		})

	return (
		<div>
			<div className={s.container}>
				<p className={s.text}>
					C O O K I E S
				</p>
			</div>
			<Container>
				<p></p>
				<Grid container component="div" direction="row" justify='space-between' spacing={4}>
					{ CookiesElements }
				</Grid>
				<p></p>
			</Container>
		</div>
	);
};