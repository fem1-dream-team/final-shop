import React from 'react'
import { shallow } from 'enzyme'
import { Home } from './Home'

describe('Home container', () => {
	const props = {
		blocks: {
			data: [],
			simpleSlider: false,
			errorMsg: null,
		},
	}

	describe('Home container simpleSliderOn', () => {

		it('isLoading', () => {
			const nextProps = {
				...props,
				blocks: {
					...props.blocks,
					simpleSlider: true,
				},
			}

			const home = shallow(<Home {...nextProps} />)
			expect(home.find('h1').text()).toEqual('Our Products')
		})

		it("Home component snapshot", () => {
			const wrapper = shallow(<Home />);
			expect(wrapper).toMatchSnapshot();
		});
	})
})
