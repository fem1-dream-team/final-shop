import React from 'react'
import { Link } from 'react-router-dom'

import { makeStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';

const images = [
	{
		url: '../img/products/cakes/1.jpg',
		title: 'CAKES',
		width: '30%',
		path: '/cakes',
	},
	{
		url: '../img/products/tarts/apricot-tart.jpg',
		title: 'TARTS',
		width: '30%',
		path: '/tarts',
	},
	{
		url: '../img/products/cupcakes/muffin-3607780_1280.jpg',
		title: 'CUPCAKES',
		width: '30%',
		path: '/cupcakes',
	},
	{
		url: '../img/products/cookies/13.jpg',
		title: 'COOKIES',
		width: '30%',
		path: '/cookies',
	},
	{
		url: '../img/products/desserts/blueberries-dessert.jpg',
		title: 'DESSERTS',
		width: '30%',
		path: '/desserts',
	},
	{
		url: '../img/products/macaroons/21.jpg',
		title: 'MACAROONS',
		width: '30%',
		path: '/macaroons',
	}
];

const useStyles = makeStyles(theme => ({
	root: {
		display: 'flex',
		flexWrap: 'wrap',
		minWidth: 300,
		width: '100%',
		justifyContent: 'center',

	},
	image: {
		position: 'relative',
		height: 200,
		[theme.breakpoints.down('xs')]: {
			width: '100% !important', // Overrides inline-style
			height: 100,
		},
		'&:hover, &$focusVisible': {
			zIndex: 1,
			'& $imageBackdrop': {
				opacity: 0.15,
			},
			'& $imageMarked': {
				opacity: 0,
			},
			'& $imageTitle': {
				border: '4px solid currentColor',
			},
		},
	},
	focusVisible: {},
	imageButton: {
		position: 'absolute',
		left: 0,
		right: 0,
		top: 0,
		bottom: 0,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		color: theme.palette.common.white,
	},
	imageSrc: {
		position: 'absolute',
		left: 0,
		right: 0,
		top: 0,
		bottom: 0,
		backgroundSize: 'cover',
		backgroundPosition: 'center 40%',
	},
	imageBackdrop: {
		position: 'absolute',
		left: 0,
		right: 0,
		top: 0,
		bottom: 0,
		backgroundColor: theme.palette.common.black,
		opacity: 0.55,
		transition: theme.transitions.create('opacity'),
	},
	imageTitle: {
		position: 'relative',
		padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`,
	},
	imageMarked: {
		height: 3,
		width: 18,
		backgroundColor: theme.palette.common.white,
		position: 'absolute',
		bottom: -2,
		left: 'calc(50% - 9px)',
		transition: theme.transitions.create('opacity'),
	},
}));

export const Categories = () => {
	const classes = useStyles();
	return (
		<div>

			<div className={classes.root}>
				{images.map(image => (

					<ButtonBase
						focusRipple
						key={image.title}
						className={classes.image}
						focusVisibleClassName={classes.focusVisible}
						style={{
							width: image.width,
						}}
					>
						<Link to={image.path}>
							<span
								className={classes.imageSrc}
								style={{
									backgroundImage: `url(${image.url})`,
								}}
							/>
							<span className={classes.imageBackdrop} />
							<span className={classes.imageButton}>
								<Typography
									component="span"
									variant="subtitle1"
									color="inherit"
									className={classes.imageTitle}
								>
									{image.title}
									<span className={classes.imageMarked} />
								</Typography>
							</span>
						</Link>
					</ButtonBase>

				))}
			</div>
			<p></p>
		</div>
	)
}