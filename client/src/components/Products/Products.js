import React, { useEffect } from 'react'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import { Container, Grid } from '@material-ui/core'
import s from './category.module.css'
import { connect } from 'react-redux'
import { getProductCategories, getSearchProducts } from '../../actions/productsActions'
import { withRouter } from 'react-router-dom'

const Products = (props) => {
	// eslint-disable-next-line no-restricted-globals
	const q = window.location.search.split('q=')[1] ? location.search.split('q=')[1] : ''

	useEffect(() => {
		props.location.pathname === '/search'
			? props.getSearchProducts(`${props.location.pathname}?q=${q}`)
			: props.getProductCategories(props.location.pathname)
		// eslint-disable-next-line
	}, [])

	// debugger
	return (
		<Container>
			<div className={s.container}>
				<h1 className={s.text}> {
					props.productsList
						? props.location.pathname.slice(1)
						: 'Loading...'
				}
				</h1>
			</div>
			<Grid container component="div" direction="row" justify='flex-start' spacing={4}>

				{!props.productsList
					? null
					: props.productsList.map((item) => {
						const detailedPath = item._id
						return (
							<Grid item component="div" sm={3} key={item._id}>
								<Card className="div">
									<CardActionArea onClick={() => { props.history.push(`${detailedPath}`) }}>
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
											<Typography className={s.description} variant="body2" color="textSecondary" component="div">
												<p>{item.description}</p>
											</Typography>
										</CardContent>
									</CardActionArea>
									<Typography className={s.price} variant="h6" component="h2">
										{item.price} UAH
									</Typography>
									<CardActions>
										<Button size="small" variant="contained" color="primary">
											Buy
										</Button>
										<Button onClick={() => { props.history.push(`${detailedPath}`) }} size="small" color="primary">
											Details
										</Button>
									</CardActions>
								</Card>
							</Grid>)
					})
				}
			</Grid>
		</Container>
	)
}

const mapStateToProps = state => {
	return {
		productsList: state.products.productsList,
	}
}

export default connect(mapStateToProps, { getSearchProducts, getProductCategories })(withRouter(Products))
