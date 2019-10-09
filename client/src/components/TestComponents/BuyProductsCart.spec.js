import React from "react";
import { BuyProductCart } from "../BuyProductCart/BuyProductCart";
import renderer from 'react-test-renderer'

describe("BuyProductCart component", () => {

	it("BuyProductCart component render", () => {
		const wrapper = renderer.create(<BuyProductCart />).toJSON();
		expect(wrapper).toMatchSnapshot();

	});
});