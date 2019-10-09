import Brand from '../navbar/Brand'
import React from "react";
import renderer from 'react-test-renderer'

describe("Brand component", () => {

	it("Brand component render", () => {
		const wrapper = renderer.create(<Brand />).toJSON();
		expect(wrapper).toMatchSnapshot();

	});
});