import React from 'react'
import { SimpleSlider } from '../SimpleSlider'
import { Categories } from '../Categories'
import { CategoriesSecond } from '../CategoriesSecond'

export const Home = () => {
	return (
		<div>
			<h1>Home page</h1>
			<SimpleSlider/>
			<Categories/>
			<CategoriesSecond/>
		</div>
	)
}
