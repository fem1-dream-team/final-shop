import React from "react";
import Home from "./Home";
import renderer from 'react-test-renderer'

import { configure, shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
// configure ({ adapter: new Adapter() });
// global.shallow = shallow;
// global.render = render;
// global.mount = mount;
// console.error = message => {
// 	throw new Error(message);
// };



describe("Home component", () => {

	it("Home component render", () => {
		const wrapper = renderer.create(<Home />).toJSON();
		expect(wrapper).toMatchSnapshot();
	});

});