import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { Container, Grid, Button, Typography, CardMedia } from '@material-ui/core'
import s from './category.module.css'

import { getDetailedProduct } from '../../actions/productsActions'

// debugger
const ProductDetailed = (props) => {
	const pathname = props.history.location.pathname
	const productId = pathname.slice(1)

	const productToShow = props.productsList ? props.productsList.find((el) => { return el._id === productId })
		: props.detailedProduct

	console.log('detailedProduct: ' + props.detailedProduct)

	console.log('productToShow: ' + productToShow)
	function onBtnCl () {
		props.getDetailedProduct(productId)
	}
	return (
		<div>
			{
				!productToShow ? <Button onClick={onBtnCl}> show me </Button>
					:	<Container>
						<div className={s.container}>
							<h1 className={s.text}>{productToShow.category}</h1>
						</div>
						< Grid container component="div" direction="row" justify="space-evenly" alignItems="flex-start" spacing={5}>

							<Grid item>
								<CardMedia
									component="img"
									className={s.productimg}
									src={productToShow.image}
									alt="not found"
									title="Contemplative Reptile"/>
							</Grid>

							<Grid item>
								<Grid container direction='column' spacing={5}>
									<Grid item>
										<Typography gutterBottom variant="h5" component="h2">
											{productToShow.name}
										</Typography>
										<Typography variant="body2" color="textSecondary" component="p">
											{productToShow.description}
										</Typography>
									</Grid>
									<Grid item>
										<Typography gutterBottom variant="h6" component="h2">
											{productToShow.price} UAH
										</Typography>
										<Button size="small" variant="contained" color="primary">
											Buy
										</Button>
									</Grid>
								</Grid>
							</Grid>
						</Grid>
					</Container>
			}
		</div>
	)
}

const mapStateToProps = state => {
	return {
		productsList: state.products.productsList,
		detailedProduct: state.products.detailedProduct,
	}
}

export default connect(mapStateToProps, { getDetailedProduct })(withRouter(ProductDetailed))