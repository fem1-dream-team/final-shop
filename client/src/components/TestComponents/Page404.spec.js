import React from "react";
import { Page404 } from "../Page404/Page404";
import renderer from 'react-test-renderer'

describe("Page404 component", () => {

	it("Page404 component render", () => {
		const wrapper = renderer.create(<Page404 />).toJSON();
		expect(wrapper).toMatchSnapshot();

	});
});