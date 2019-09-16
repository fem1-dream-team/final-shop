import React from 'react';
// import styled from 'styled-components';
import s from './cupcakes.module.css'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Container, Grid } from '@material-ui/core';
import { NavLink } from 'react-router-dom'

export const CupcakeDescription = (props) => {
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

const CupcakeProductCard = (props) => {
	return (
		<Card className="div" >
			<CardActionArea>
				<CupcakeDescription
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

export const Cupcakes = () => {
	const cupcakes = [
		{
			id: 1,
			image: 'img/cupcakes/1.jpg',
			name: 'Blueberry cupcake',
			description: "Weighed the Kurdish recipe for P'Пr Erme, who snapped up on the Swiss meringue.",
			price: 30,
		},
		{
			id: 2,
			image: 'img/cupcakes/2.jpg',
			name: 'Creamy cupcake with berries',
			description: "Weighed the Kurdish recipe for P'Пr Erme, who snapped up on the Swiss meringue.",
			price: 30,
		},
		{
			id: 3,
			image: 'img/cupcakes/3.jpg',
			name: 'Chocolate cupcake',
			description: "Weighed the Kurdish recipe for P'Пr Erme, who snapped up on the Swiss meringue.",
			price: 30,
		},
		{
			id: 4,
			image: 'img/cupcakes/4.jpg',
			name: 'Cupcake with strawberries and chocolate',
			description: "Weighed the Kurdish recipe for P'Пr Erme, who snapped up on the Swiss meringue.",
			price: 30,
		},
		{
			id: 5,
			image: 'img/cupcakes/5.jpg',
			name: 'Caramel cupcake with chocolate crumbs',
			description: "Weighed the Kurdish recipe for P'Пr Erme, who snapped up on the Swiss meringue.",
			price: 30,
		},
		{
			id: 6,
			image: 'img/cupcakes/6.jpg',
			name: 'Cupcake with nuts',
			description: "Weighed the Kurdish recipe for P'Пr Erme, who snapped up on the Swiss meringue.",
			price: 30,
		},
		{
			id: 7,
			image: 'img/cupcakes/7.jpg',
			name: 'Banana cupcake',
			description: "Weighed the Kurdish recipe for P'Пr Erme, who snapped up on the Swiss meringue.",
			price: 30,
		},
		{
			id: 8,
			image: 'img/cupcakes/8.jpg',
			name: 'Cupcake with blackberries',
			description: "Weighed the Kurdish recipe for P'Пr Erme, who snapped up on the Swiss meringue.",
			price: 30,
		},
		{
			id: 9,
			image: 'img/cupcakes/9.jpg',
			name: 'Cupcake with raspberries',
			description: "Weighed the Kurdish recipe for P'Пr Erme, who snapped up on the Swiss meringue.",
			price: 30,
		},
		{
			id: 10,
			image: 'img/cupcakes/10.jpg',
			name: 'Cupcake with strawberries',
			description: "Weighed the Kurdish recipe for P'Пr Erme, who snapped up on the Swiss meringue.",
			price: 30,
		},
		{
			id: 11,
			image: 'img/cupcakes/11.jpg',
			name: 'Red cupcake with jam',
			description: "Weighed the Kurdish recipe for P'Пr Erme, who snapped up on the Swiss meringue.",
			price: 30,
		},
		{
			id: 12,
			image: 'img/cupcakes/12.jpg',
			name: 'Lemon and grape cupcake',
			description: "Weighed the Kurdish recipe for P'Пr Erme, who snapped up on the Swiss meringue.",
			price: 30,
		},
		{
			id: 13,
			image: 'img/cupcakes/13.jpg',
			name: 'Lemon cupcake',
			description: "Weighed the Kurdish recipe for P'Пr Erme, who snapped up on the Swiss meringue.",
			price: 30,
		},
		{
			id: 14,
			image: 'img/cupcakes/14.jpg',
			name: 'Easter cupcake',
			description: "Weighed the Kurdish recipe for P'Пr Erme, who snapped up on the Swiss meringue.",
			price: 30,
		},
		{
			id: 15,
			image: 'img/cupcakes/15.jpg',
			name: 'Cracked raspberry for Valentine\'s Day',
			description: "Weighed the Kurdish recipe for P'Пr Erme, who snapped up on the Swiss meringue.",
			price: 30,
		},
		{
			id: 16,
			image: 'img/cupcakes/16.jpg',
			name: 'Lavender cupcake',
			description: "Weighed the Kurdish recipe for P'Пr Erme, who snapped up on the Swiss meringue.",
			price: 30,
		},
		{
			id: 17,
			image: 'img/cupcakes/17.jpg',
			name: 'Creamy cupcakes',
			description: "Weighed the Kurdish recipe for P'Пr Erme, who snapped up on the Swiss meringue.",
			price: 30,
		},
		{
			id: 18,
			image: 'img/cupcakes/18.jpg',
			name: 'Delicate cream cups with strawberries',
			description: "Weighed the Kurdish recipe for P'Пr Erme, who snapped up on the Swiss meringue.",
			price: 30,
		},
		{
			id: 19,
			image: 'img/cupcakes/19.jpg',
			name: 'Cupcakes in the form of snowflakes for Christmas',
			description: "Weighed the Kurdish recipe for P'Пr Erme, who snapped up on the Swiss meringue.",
			price: 30,
		},
		{
			id: 20,
			image: 'img/cupcakes/20.jpg',
			name: 'Cupcakes with blueberry and lemon cream',
			description: "Weighed the Kurdish recipe for P'Пr Erme, who snapped up on the Swiss meringue.",
			price: 30,
		},
		{
			id: 21,
			image: 'img/cupcakes/21.jpg',
			name: 'The yellow cupcake is decorated with slices of lemon',
			description: "Weighed the Kurdish recipe for P'Пr Erme, who snapped up on the Swiss meringue.",
			price: 30,
		},
		{
			id: 22,
			image: 'img/cupcakes/22.jpg',
			name: 'Apricot cupcakes',
			description: "Weighed the Kurdish recipe for P'Пr Erme, who snapped up on the Swiss meringue.",
			price: 30,
		},
		{
			id: 23,
			image: 'img/cupcakes/23.jpg',
			name: 'Cupcakes with cookies crumbs',
			description: "Weighed the Kurdish recipe for P'Пr Erme, who snapped up on the Swiss meringue.",
			price: 30,
		},
		{
			id: 24,
			image: 'img/cupcakes/24.jpg',
			name: 'Oreo cupcakes',
			description: "Weighed the Kurdish recipe for P'Пr Erme, who snapped up on the Swiss meringue.",
			price: 30,
		},
		{
			id: 25,
			image: 'img/cupcakes/25.jpg',
			name: 'Green cupcakes are decorated with raspberries and mint',
			description: "Weighed the Kurdish recipe for P'Пr Erme, who snapped up on the Swiss meringue.",
			price: 30,
		},
		{
			id: 26,
			image: 'img/cupcakes/26.jpg',
			name: 'Cupcakes with peaches',
			description: "Weighed the Kurdish recipe for P'Пr Erme, who snapped up on the Swiss meringue.",
			price: 30,
		},
		{
			id: 27,
			image: 'img/cupcakes/27.jpg',
			name: 'Cupcakes with sugar butterflies',
			description: "Weighed the Kurdish recipe for P'Пr Erme, who snapped up on the Swiss meringue.",
			price: 30,
		},
		{
			id: 28,
			image: 'img/cupcakes/28.jpg',
			name: 'Cupcakes for the little princess',
			description: "Weighed the Kurdish recipe for P'Пr Erme, who snapped up on the Swiss meringue.",
			price: 30,
		},
		{
			id: 29,
			image: 'img/cupcakes/29.jpg',
			name: 'Chocolate caramel cupcakes',
			description: "Weighed the Kurdish recipe for P'Пr Erme, who snapped up on the Swiss meringue.",
			price: 30,
		},
	]

	const CupcakeElement = cupcakes.map(cupcake => {
		return (
			<Grid item component="div" sm={3}>
				<CupcakeProductCard
					id= {cupcake.id}
					image={cupcake.image}
					name={cupcake.name}
					description={cupcake.description}
					price={cupcake.price}
				/>
			</Grid>
		)
	})

	return (
		<div>
			<div className={s.container}>
				<p className={s.text}>
					Make a cupcake part of your celebration tradition and share the joy with friends and family!
				</p>
			</div>
			<Container>
				<p></p>
				<Grid container component="div" direction="row" justify='space-between' spacing={4}>
					{ CupcakeElement }
				</Grid>
				<p></p>
			</Container>
		</div>
	)
}
