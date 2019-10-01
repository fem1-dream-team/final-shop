import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Fade from '@material-ui/core/Fade'
import { OrderApplicationForm } from '../OrderApplicationForm/OrderApplicationForm'
import s from './basketProducts.module.css'
import { Dialog } from '@material-ui/core'
import Backdrop from '@material-ui/core/Backdrop/Backdrop'
//import { AxiosInstance as axios } from 'axios'

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
		display: 'block',
		position: 'fixed',
		top: '15%',
		right: '0',
		zIndex: '101',
		width: '70px',
		height: '70px',
		fontSize: '10px',
		fontWeight: 'bolt',
		color: 'darkgreen',
	}
}));

export const BasketProducts = (props) => {

// let products = (props) => {
// 		if (props.productsBasket.length === 0) {
// 		axios.get("http://localhost:3001/api/getData/category/" + props.category)
// 			.then(response => {
// 				console.log(response)
// 				props.addToCart(response.data.id)
// 			})
// 	}
// }

	const classes = useStyles();

	const [open, setOpen] = React.useState(false);
	const handleOpenBasket = () => {
		setOpen(true)
		//props.addToCart(id, price, total)
	};

	const [openCart, setOpenCart] = React.useState(false);

	const handleOpenCart = () => {
		setOpenCart(true);
	};
	const handleCloseCart = () => {
		setOpenCart(false);
	};
	return (
		<div>
			<Button size="small" color="primary" onClick={handleOpenBasket}>
				<p>Buy</p>
			</Button>
			<Fade in={open}>
				<div onScroll='paper'>
					<Button variant="contained" className={classes.button} onClick={handleOpenCart} >
						<img className={s.imgBasket} src='img/basket/shopping-cart-728408_1280.png' alt='basket'/>
					</Button>
					<div className={classes.div}>{props.price} UAH</div>

					<Dialog
						aria-labelledby="transition-modal-title"
						aria-describedby="transition-modal-description"
						className={classes.modal}
						open={openCart}
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
										id={props.id}
										image={props.image}
										name={props.name}
										description={props.description}
										price={props.price}
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