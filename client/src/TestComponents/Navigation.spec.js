import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow, render, mount } from 'enzyme';
import '../matchMedia'
import Navigation from '../components/Profile/Navigation/Navigation'
Enzyme.configure({ adapter: new Adapter() });

global.shallow = shallow
global.render = render
global.mount = mount

describe('Navigation component', () => {
	it('Navigation component render', () => {
		const wrapper = shallow(<Navigation />);
		expect(wrapper).toMatchSnapshot();
	});
});