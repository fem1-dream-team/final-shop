import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'

import {Container, Grid, Button, Typography, CardMedia} from '@material-ui/core'
import s from './category.module.css'

import {getDetailedProduct} from '../../actions/productsActions'

// debugger
const ProductDetailed = (props) => {
	const pathname = props.history.location.pathname
	const productId = pathname.slice(16)

	const productToShow = props.productsList ? props.productsList.find((el) => {
		return el._id === productId
	})
		: props.detailedProduct

	function onBtnCl () {
		props.getDetailedProduct(productId)
	}

	useEffect(() => {
		if (!props.productsList) {
			props.getDetailedProduct(productId)
		}
		// eslint-disable-next-line
	}, [])

	return (
		!productToShow ? <Button onClick={onBtnCl}> show me </Button>
			: <Container>
				<div className={s.container} style={{cursor: 'pointer'}} onClick={() => {
					props.history.push(`../${productToShow.category}`)
				}}>
					<h1 className={s.text}>{
						productToShow ? productToShow.category : 'Loading...'
					}
					</h1>
				</div>
				< Grid container component="div" direction="row" justify="space-evenly" alignItems="flex-start" spacing={5}>

					<Grid item sm={4}>
						<CardMedia
							component="img"
							height="300"
							src={`../../${productToShow.image}`}
							alt="not found"
							title="Contemplative Reptile"/>
					</Grid>

					<Grid item sm={5}>
						<Grid container direction='column' spacing={5}>
							<Grid item>
								<Typography gutterBottom variant="h5" component="h2">
									{productToShow.name}
								</Typography>
								<Typography className={s.description} variant="body2" color="textSecondary" component="p">
									{productToShow.description}
								</Typography>
							</Grid>
							<Grid item>
								<Typography gutterBottom variant="h6" component="h2">
									{productToShow.price} UAH
								</Typography>
								<Button size="medium" variant="contained" color="primary">
									Buy
								</Button>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			</Container>
	)
}

const mapStateToProps = state => {
	return {
		productsList: state.products.productsList,
		detailedProduct: state.products.detailedProduct,
		isLoading: state.general.isLoading
	}
}

export default connect(mapStateToProps, {getDetailedProduct})(withRouter(ProductDetailed))