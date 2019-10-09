import React from "react";
import OrderHistory from "../Profile/OrderHistory/OrderHistory";
import renderer from 'react-test-renderer'

describe("OrderHistory component", () => {

	it("OrderHistory component render", () => {
		const wrapper = renderer.create(<OrderHistory />).toJSON();
		expect(wrapper).toMatchSnapshot();

	});
});