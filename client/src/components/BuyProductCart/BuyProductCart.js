import s from './BuyProductCart.module.css'

export const BuyProductCart = (props) => {

	return (
		<div>
			<p className={s.header} >YOUR ORDER</p>
			<div>
				<img src={props.image}/>
				<h3>{props.name}</h3>
				<p>{props.description}</p>

			</div>
		</div>
	);
}
