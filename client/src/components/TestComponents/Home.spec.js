import React from "react";
import { Home } from "../Home";
import renderer from 'react-test-renderer'

describe("Home component", () => {

	it("Home component render", () => {
		const wrapper = renderer.create(<Home />).toJSON();
		expect(wrapper).toMatchSnapshot();

	});
});