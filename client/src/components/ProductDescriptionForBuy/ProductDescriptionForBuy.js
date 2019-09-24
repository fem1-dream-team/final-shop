import React from 'react';
import s from './productDescriptionForBuy.module.css'

export const ProductDescriptionForBuy = (props) => {
	return (
		<div>
			<p className={s.header}>YOUR ORDER</p>
			<div>
				<img src={props.state.cakes.image}/>
				<h3>{props.state.cakes.name}</h3>
				<p>{props.state.cakes.description}</p>

			</div>
		</div>
	);
}
