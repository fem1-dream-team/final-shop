import React from 'react';
import store from '../store'
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow, render, mount } from 'enzyme';

Enzyme.configure({ adapter: new Adapter() });

global.shallow = shallow
global.render = render
global.mount = mount

describe('store component', () => {
	it('store component render', () => {
		const wrapper = shallow(<store />);
		expect(wrapper).toMatchSnapshot();
	});
});