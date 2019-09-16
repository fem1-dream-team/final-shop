import React from 'react'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';

const images = [
	{
		url: 'https://media.eggs.ca/assets/RecipeThumbs/_resampled/FillWyIxMjgwIiwiNzIwIl0/Grab-n-Go-Egg-Breakfast-Box2-CMS.jpg',
		title: 'Breakfast',
		width: '30%',
		path: '/Breakfast',
	},
	{
		url: 'https://media1.s-nbcnews.com/j/newscms/2019_21/2870431/190524-classic-american-cheeseburger-ew-207p_d9270c5c545b30ea094084c7f2342eb4.fit-760w.jpg',
		title: 'Burgers',
		width: '30%',
		path: '/Burgers',
	},
	{
		url: 'https://www.biggerbolderbaking.com/wp-content/uploads/2017/08/1C5A0056.jpg',
		title: 'Cake',
		width: '30%',
		path: '/Cake',
	},
	{
		url: 'https://www.biggerbolderbaking.com/wp-content/uploads/2017/08/1C5A0056.jpg',
		title: 'Pie',
		width: '30%',
		path: '/Pie',
	},
	{
		url: '../images/1.jpg',
		title: 'Macaroons',
		width: '30%',
		path: '/Macaroons',
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

		</div>
	)
}