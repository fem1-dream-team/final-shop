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
				<NavLink to={`/cookies/buy/${props.id}`}>
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

export const Cookies = (props) => {
	const CookiesElements = props.cookies
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