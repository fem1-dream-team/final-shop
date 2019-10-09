import Navigation from '../Profile/Navigation/Navigation'
import React from "react";
import renderer from 'react-test-renderer'

describe("Navigation component", () => {

	it("Navigation component render", () => {
		const wrapper = renderer.create(<Navigation />).toJSON();
		expect(wrapper).toMatchSnapshot();

	});
});