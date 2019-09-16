import React from 'react';
import s from './macaroons.module.css'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Container, Grid } from '@material-ui/core';
import { NavLink } from 'react-router-dom'

export const MacaroonDescription = (props) => {
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

const MacaroonProductCard = (props) => {
	return (
		<Card className="div" >
			<CardActionArea>
				<MacaroonDescription
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

export const Macaroons = () => {
	const macaroons = [
		{
			id: 1,
			image: 'img/macaroons/1.jpg',
			name: 'Souffle cake with blueberries',
			description: "We discovered the classic message with a saber, weighed the Kurdish recipe for P'Пr Erme, who snapped up on the Swiss meringue.",
			price: 30,
		},
		{
			id: 2,
			image: 'img/macaroons/2.jpg',
			name: 'Souffle cake with blueberries',
			description: "We discovered the classic message with a saber, weighed the Kurdish recipe for P'Пr Erme, who snapped up on the Swiss meringue.",
			price: 30,
		},
		{
			id: 3,
			image: 'img/macaroons/3.jpg',
			name: 'Souffle cake with blueberries',
			description: "We discovered the classic message with a saber, weighed the Kurdish recipe for P'Пr Erme, who snapped up on the Swiss meringue.",
			price: 30,
		},
		{
			id: 4,
			image: 'img/macaroons/4.jpg',
			name: 'Souffle cake with blueberries',
			description: "We discovered the classic message with a saber, weighed the Kurdish recipe for P'Пr Erme, who snapped up on the Swiss meringue.",
			price: 30,
		},
		{
			id: 5,
			image: 'img/macaroons/5.jpg',
			name: 'Souffle cake with blueberries',
			description: "We discovered the classic message with a saber, weighed the Kurdish recipe for P'Пr Erme, who snapped up on the Swiss meringue.",
			price: 30,
		},
		{
			id: 6,
			image: 'img/macaroons/6.jpg',
			name: 'Souffle cake with blueberries',
			description: "We discovered the classic message with a saber, weighed the Kurdish recipe for P'Пr Erme, who snapped up on the Swiss meringue.",
			price: 30,
		},
		{
			id: 7,
			image: 'img/macaroons/7.jpg',
			name: 'Souffle cake with blueberries',
			description: "We discovered the classic message with a saber, weighed the Kurdish recipe for P'Пr Erme, who snapped up on the Swiss meringue.",
			price: 30,
		},
		{
			id: 8,
			image: 'img/macaroons/8.jpg',
			name: 'Souffle cake with blueberries',
			description: "We discovered the classic message with a saber, weighed the Kurdish recipe for P'Пr Erme, who snapped up on the Swiss meringue.",
			price: 30,
		},
		{
			id: 9,
			image: 'img/macaroons/9.jpg',
			name: 'Souffle cake with blueberries',
			description: "We discovered the classic message with a saber, weighed the Kurdish recipe for P'Пr Erme, who snapped up on the Swiss meringue.",
			price: 30,
		},
		{
			id: 10,
			image: 'img/macaroons/10.jpg',
			name: 'Souffle cake with blueberries',
			description: "We discovered the classic message with a saber, weighed the Kurdish recipe for P'Пr Erme, who snapped up on the Swiss meringue.",
			price: 30,
		},
		{
			id: 11,
			image: 'img/macaroons/11.jpg',
			name: 'Souffle cake with blueberries',
			description: "We discovered the classic message with a saber, weighed the Kurdish recipe for P'Пr Erme, who snapped up on the Swiss meringue.",
			price: 30,
		},
		{
			id: 12,
			image: 'img/macaroons/12.jpg',
			name: 'Souffle cake with blueberries',
			description: "We discovered the classic message with a saber, weighed the Kurdish recipe for P'Пr Erme, who snapped up on the Swiss meringue.",
			price: 30,
		},
		{
			id: 13,
			image: 'img/macaroons/13.jpg',
			name: 'Souffle cake with blueberries',
			description: "We discovered the classic message with a saber, weighed the Kurdish recipe for P'Пr Erme, who snapped up on the Swiss meringue.",
			price: 30,
		},
		{
			id: 14,
			image: 'img/macaroons/14.jpg',
			name: 'Souffle cake with blueberries',
			description: "We discovered the classic message with a saber, weighed the Kurdish recipe for P'Пr Erme, who snapped up on the Swiss meringue.",
			price: 30,
		},
		{
			id: 15,
			image: 'img/macaroons/15.jpg',
			name: 'Souffle cake with blueberries',
			description: "We discovered the classic message with a saber, weighed the Kurdish recipe for P'Пr Erme, who snapped up on the Swiss meringue.",
			price: 30,
		},
		{
			id: 16,
			image: 'img/macaroons/16.jpg',
			name: 'Souffle cake with blueberries',
			description: "We discovered the classic message with a saber, weighed the Kurdish recipe for P'Пr Erme, who snapped up on the Swiss meringue.",
			price: 30,
		},
		{
			id: 17,
			image: 'img/macaroons/17.jpg',
			name: 'Souffle cake with blueberries',
			description: "We discovered the classic message with a saber, weighed the Kurdish recipe for P'Пr Erme, who snapped up on the Swiss meringue.",
			price: 30,
		},
		{
			id: 18,
			image: 'img/macaroons/18.jpg',
			name: 'Souffle cake with blueberries',
			description: "We discovered the classic message with a saber, weighed the Kurdish recipe for P'Пr Erme, who snapped up on the Swiss meringue.",
			price: 30,
		},
		{
			id: 19,
			image: 'img/macaroons/19.jpg',
			name: 'Souffle cake with blueberries',
			description: "We discovered the classic message with a saber, weighed the Kurdish recipe for P'Пr Erme, who snapped up on the Swiss meringue.",
			price: 30,
		},
		{
			id: 20,
			image: 'img/macaroons/20.jpg',
			name: 'Souffle cake with blueberries',
			description: "We discovered the classic message with a saber, weighed the Kurdish recipe for P'Пr Erme, who snapped up on the Swiss meringue.",
			price: 30,
		},
		{
			id: 21,
			image: 'img/macaroons/21.jpg',
			name: 'Souffle cake with blueberries',
			description: "We discovered the classic message with a saber, weighed the Kurdish recipe for P'Пr Erme, who snapped up on the Swiss meringue.",
			price: 30,
		},
		{
			id: 22,
			image: 'img/macaroons/22.jpg',
			name: 'Souffle cake with blueberries',
			description: "We discovered the classic message with a saber, weighed the Kurdish recipe for P'Пr Erme, who snapped up on the Swiss meringue.",
			price: 30,
		},
		{
			id: 23,
			image: 'img/macaroons/23.jpg',
			name: 'Souffle cake with blueberries',
			description: "We discovered the classic message with a saber, weighed the Kurdish recipe for P'Пr Erme, who snapped up on the Swiss meringue.",
			price: 30,
		},
		{
			id: 24,
			image: 'img/macaroons/24.jpg',
			name: 'Souffle cake with blueberries',
			description: "We discovered the classic message with a saber, weighed the Kurdish recipe for P'Пr Erme, who snapped up on the Swiss meringue.",
			price: 30,
		},
		{
			id: 25,
			image: 'img/macaroons/25.jpg',
			name: 'Souffle cake with blueberries',
			description: "We discovered the classic message with a saber, weighed the Kurdish recipe for P'Пr Erme, who snapped up on the Swiss meringue.",
			price: 30,
		},
		{
			id: 26,
			image: 'img/macaroons/26.jpg',
			name: 'Souffle cake with blueberries',
			description: "We discovered the classic message with a saber, weighed the Kurdish recipe for P'Пr Erme, who snapped up on the Swiss meringue.",
			price: 30,
		},
		{
			id: 27,
			image: 'img/macaroons/27.jpg',
			name: 'Souffle cake with blueberries',
			description: "We discovered the classic message with a saber, weighed the Kurdish recipe for P'Пr Erme, who snapped up on the Swiss meringue.",
			price: 30,
		},
		{
			id: 28,
			image: 'img/macaroons/28.jpg',
			name: 'Souffle cake with blueberries',
			description: "We discovered the classic message with a saber, weighed the Kurdish recipe for P'Пr Erme, who snapped up on the Swiss meringue.",
			price: 30,
		},
		{
			id: 29,
			image: 'img/macaroons/29.jpg',
			name: 'Souffle cake with blueberries',
			description: "We discovered the classic message with a saber, weighed the Kurdish recipe for P'Пr Erme, who snapped up on the Swiss meringue.",
			price: 30,
		},
	]

	const MacaroonsElements = macaroons
		.map(macaroon => {
			return (
				<Grid item component="div" sm={3}>
					<MacaroonProductCard
						id= {macaroon.id}
						image={macaroon.image}
						name={macaroon.name}
						description={macaroon.description}
						price={macaroon.price}
					/>
				</Grid>
			)
		})

	return (
		<div>
			<div className={s.container}>
				<p className={s.text}>
					MACAROONS
				</p>
			</div>
			<Container>
				<p></p>
				<Grid container component="div" direction="row" justify='space-between' spacing={4}>
					{ MacaroonsElements }
				</Grid>
				<p></p>
			</Container>
		</div>
	);
}
