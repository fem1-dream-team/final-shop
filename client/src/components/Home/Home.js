import React from 'react';
import {SimpleSlider} from '../SimpleSlider';
import {Categories} from '../Categories';
import s from '../Products/category.module.css'

export const Home = () => {
	return (
		<div>
			<SimpleSlider/>
			<div className={s.container}>
				<h1 className={s.text}>Our Products</h1>
			</div>
			<Categories/>
		</div>
	)
};
