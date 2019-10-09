import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow, render, mount } from 'enzyme';
import '../matchMedia'
import { Cart } from '../components/ComponentsForNavigation/Cart';
Enzyme.configure({ adapter: new Adapter() });

global.shallow = shallow
global.render = render
global.mount = mount

describe('Cart component', () => {
	it('Cart component render', () => {
		const wrapper = shallow(<Cart />);
		expect(wrapper).toMatchSnapshot();
	});
});