import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {Dialog} from '@material-ui/core'
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { OrderApplicationForm } from './OrderApplicationForm/OrderApplicationForm'
import Button from '@material-ui/core/Button'
import s from './BasketProducts/basketProducts.module.css'

const useStyles = makeStyles(theme => ({
	modal: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		width: '40%',
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
}));

export const BuyProductCart = (props) => {
	const classes = useStyles();
	const [open, setOpen] = React.useState(false);

	const handleOpenCart = () => {
		setOpen(true);
	};

	const handleCloseCart = () => {
		setOpen(false);
	};

	return (
		<div style={{width: '36%'}}>
			<Button variant="contained" className={classes.button} onClick={handleOpenCart}>
				<img className={s.imgBasket} src='img/basket/shopping-cart-728408_1280.png' alt='basket'/>
			</Button>
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
	)
}