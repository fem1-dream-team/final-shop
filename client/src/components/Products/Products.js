import React, {useEffect} from 'react'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import {Container, Grid} from '@material-ui/core'
import s from './category.module.css'
import {connect} from 'react-redux'
import {getProductCategories, getSearchProducts} from '../../actions/productsActions'
import {withRouter} from 'react-router-dom'
import {buyBtnHandler} from '../../actions/basketActions'
import BasketProducts from '../BuyProductCart/BasketProducts/BasketProducts'
import {basePath} from '../../actions/types';

const Products = (props) => {
	// eslint-disable-next-line no-restricted-globals
	const q = window.location.search.split('q=')[1] ? location.search.split('q=')[1] : ''

	const categoryName = props.location.pathname.slice(7)

	useEffect(() => {
		props.location.pathname === '/search'
			? props.getSearchProducts(`${props.location.pathname}?q=${q}`)
			: props.getProductCategories(categoryName)
		// eslint-disable-next-line
	}, [])

	return (
		<Container>
			<div className={s.container}>
				<div className={s.text}> {
					props.productsList
						? categoryName
						: 'Loading...'
				}
				</div>
			</div>
			<Grid container compodnent="div" direction="row" justify='flex-start' spacing={4}>

				{!props.productsList
					? null
					: props.productsList.map((item) => {
						const detailedPath = item._id

						// const priceArr = props.productsBasket.map((item) => { return (item.price) })
						// const reducer = (accumulator, currentVal) => { return Number(accumulator) + Number(currentVal) }
						// const totalPrice = priceArr.reduce(reducer, item.price)
						// const totalAmount = priceArr.length

						const onBuyClick = (itemId, price, image, name) => {
							// alert(totalPrice)
							props.buyBtnHandler(itemId, price, image, name)
						}
						return (
							<Grid item component="div" sm={3} key={item._id}>
								<Card className="div">
									<CardActionArea onClick={() => {
										props.history.push(`/yummy/detailed/${detailedPath}`)
									}}>
										<CardMedia
											component="img"
											alt="Product image not found"
											height="140"
											image={`${basePath}${item.image}`}
											title="Product"
										/>
										<CardContent>
											<Typography gutterBottom variant="h5" component="h2" className={s.title}>
												{item.name}
											</Typography>
											<Typography className={s.description} variant="body2" color="textSecondary" component="div">
												<p className={s.truncate}>{item.description}</p>
											</Typography>
										</CardContent>
									</CardActionArea>

									<Typography className={(item.status === 'sale') ? s.sale : s.price} variant="h6" component="h2">
										{item.price} UAH
									</Typography>
									<CardActions>

										<Button size="small" variant="contained" color="primary" onClick={() => {
											onBuyClick(item._id, item.image, item.name, item.price)
										}}> Buy </Button>

										<BasketProducts/>
										<Button onClick={() => {
											props.history.push(`/yummy/detailed/${detailedPath}`)
										}} size="small" color="primary">
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
		category: state.products.categoryName,
		productsBasket: state.basket.productsBasket
	}
}

export default connect(mapStateToProps, {getProductCategories, buyBtnHandler, getSearchProducts})(withRouter(Products))
