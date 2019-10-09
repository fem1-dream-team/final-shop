import { SimpleSlider } from '../SimpleSlider'
import React from "react";
import renderer from 'react-test-renderer'
import Slider from 'react-slick';

describe("SimpleSlider component", () => {

	it("SimpleSlider component render", () => {
		const wrapper = renderer.create(<SimpleSlider />).toJSON();
		expect(wrapper).toMatchSnapshot();

	});
});