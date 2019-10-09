import React from "react";
import { Categories } from "../Categories";
import renderer from 'react-test-renderer'

describe("Categories component", () => {

	it("Categories component render", () => {
		const wrapper = renderer.create(<Categories />).toJSON();
		expect(wrapper).toMatchSnapshot();

	});
});