import store from '../../store'
import React from "react";
import renderer from 'react-test-renderer'

describe("store component", () => {

	it("store component render", () => {
		const wrapper = renderer.create(<store />).toJSON();
		expect(wrapper).toMatchSnapshot();

	});
});