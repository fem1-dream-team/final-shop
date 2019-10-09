import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Fade from '@material-ui/core/Fade'
import OrderApplicationForm from '../OrderApplicationForm/OrderApplicationForm'
import s from './basketProducts.module.css'
import { Dialog } from '@material-ui/core'
import Backdrop from '@material-ui/core/Backdrop/Backdrop'
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
	};
	const handleCloseCart = () => {
		setOpen(false)
	}
	localStorage.setItem('productBasket', JSON.stringify(props.productsBasket))
	localStorage.getItem('productBasket')

	const priceArr = props.productsBasket.map((item) => { return (item.id) })
	// const reducer = (accumulator, currentVal) => { return Number(accumulator) + Number(currentVal) }
	// const totalPrice = priceArr.reduce(reducer, props.price)
	const totalAmount = priceArr.length
	return (
		<div>
			<Fade in={!isEmpty(props.productsBasket || localStorage.length > 0)}>
				<div onScroll='paper'>
					<Button variant="contained" className={classes.button} onClick={handleOpenCart}>
						<img className={s.imgBasket} src='../img/basket/shopping-cart-728408_1280.png' alt='basket'/>
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
									<OrderApplicationForm/>
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
		id: state.basket.productsBasket.id,
		image: state.basket.productsBasket.image,
		name: state.basket.productsBasket.name,
		price: state.basket.productsBasket.price,
	}
}
export default connect(mapStateToProps)(BasketProducts)