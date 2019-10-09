import React from "react";
import PersonalInfo from "../Profile/PersonalInfo/PersonalInfo";
import renderer from 'react-test-renderer'

describe("PersonalInfo component", () => {

	it("PersonalInfo component render", () => {
		const wrapper = renderer.create(<PersonalInfo />).toJSON();
		expect(wrapper).toMatchSnapshot();

	});
});