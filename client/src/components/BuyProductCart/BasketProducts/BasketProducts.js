import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Fade from '@material-ui/core/Fade'
import OrderApplicationForm from '../OrderApplicationForm/OrderApplicationForm'
import s from './basketProducts.module.css'
import { Dialog } from '@material-ui/core'
import Backdrop from '@material-ui/core/Backdrop/Backdrop'
import { buyBtnHandler } from '../../../actions/basketActions'
import connect from 'react-redux/es/connect/connect'
import isEmpty from 'is-empty'

const useStyles = makeStyles(theme => ({
	modal: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	paper: {
		backgroundColor: theme.palette.background.paper,
		border: '2px solid #fff',
		boxShadow: theme.shadows[5],
		padding: theme.spacing(2, 4, 3),
	},
	button: {
		margin: theme.spacing(1),
		display: 'block',
		position: 'fixed',
		top: '15%',
		right: '2%',
		zIndex: '101',
		width: '70px',
		height: '70px',
		borderSize: 'border-box',
		borderRadius: '50%',
		backgroundColor: '#95d6bf',

	},
	div: {
		margin: theme.spacing(1),
		// display: 'block',
		position: 'fixed',
		top: '15%',
		right: '0',
		zIndex: '101',
		width: '70px',
		height: '70px',
		fontSize: '14px',
		fontFamily: 'SansSerif',
		fontWeight: 'bolt',
		color: 'darkgreen',
	}
}));

export const BasketProducts = (props) => {
	const classes = useStyles();

	const [open, setOpen] = React.useState(false);
	const handleOpenCart = () => {
		setOpen(true)
		// props.btnBasketHandler(id, image, price, name)
	};
	const handleCloseCart = () => {
		setOpen(false)
	}

	// alert(`Is arr empty? ${isEmpty([])}`)
	// console.log(`Is props.productsBasket empty?  ${isEmpty(props.productsBasket)}`)
	// console.log('props.productsBasket: ' + props.productsBasket)
	// debugger
	const priceArr = props.productsBasket.map((item) => { return (item.price) })
	// const reducer = (accumulator, currentVal) => { return Number(accumulator) + Number(currentVal) }
	// const totalPrice = priceArr.reduce(reducer, props.price)
	const totalAmount = priceArr.length

	return (
		<div>
			{/* <Button size="small" color="primary" onClick={()=>{props.buyBtnHandler()}}> */}
			{/*	<p>Buy</p> */}
			{/* </Button> */}
			<Fade in={!isEmpty(props.productsBasket)}>
				<div onScroll='paper'>
					<Button variant="contained" className={classes.button} onClick={handleOpenCart}>
						<img className={s.imgBasket} src='img/basket/shopping-cart-728408_1280.png' alt='basket'/>
					</Button>
					<div className={classes.div}>{totalAmount}</div>

					<Dialog
						aria-labelledby="transition-modal-title"
						aria-describedby="transition-modal-description"
						className={classes.modal}
						open={open}
						scroll='paper'
						onClose={handleCloseCart}
						closeAfterTransition
						BackdropComponent={Backdrop}
						BackdropProps={{
							timeout: 500,
						}}
					>
						<div style={{overflowY: 'scroll'}}>
							<Fade in={open}>
								<div className={classes.paper} >
									<OrderApplicationForm
										// id={props.id}
										// image={props.image}
										// name={props.name}
										// description={props.description}
										// price={totalPrice}
										// total={totalAmount}
									/>
								</div>
							</Fade>
						</div>
					</Dialog>
				</div>
			</Fade>
		</div>
	)
}

const mapStateToProps = (state) => {
	return {
		productsBasket: state.basket.productsBasket,
		// totalAmount: state.basket.totalAmount,
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		buyBtnHandler: (productID) => { dispatch(buyBtnHandler(productID)) },
		// btnBasketHandler: (id, image, price, name) => { dispatch(btnBasketHandler(id, image, price, name)) },
		// addToCart: (id, quantity) => { dispatch(addToCart(id, quantity)) },
		// removeCart: (id) => { dispatch(removeCart(id)) },
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(BasketProducts)