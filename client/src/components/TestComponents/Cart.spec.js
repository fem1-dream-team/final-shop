import React from "react";
import { Cart } from "../ComponentsForNavigation/Cart";
import renderer from 'react-test-renderer'

describe("Cart component", () => {

	it("Cart component render", () => {
		const wrapper = renderer.create(<Cart />).toJSON();
		expect(wrapper).toMatchSnapshot();

	});
});