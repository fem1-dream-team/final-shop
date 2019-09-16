import React from 'react';
import { CakeDescription } from '../ComponentsForNavigation/Cakes/Cakes'
import { CupcakeDescription } from '../ComponentsForNavigation/Cupcakes/Cupcakes'
import { MacaroonDescription } from '../ComponentsForNavigation/Macaroons/Macaroons'

export const ProductDescriptionForBuy = (props) => {
	return (
		<div>
			<CakeDescription
				id= {props.id}
				name={props.name}
				image={props.image}
				description={props.description}
			/>
			<CupcakeDescription
				id= {props.id}
				name={props.name}
				image={props.image}
				description={props.description}
			/>
			<MacaroonDescription
				id= {props.id}
				name={props.name}
				image={props.image}
				description={props.description}
			/>

		</div>
	)
}