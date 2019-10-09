import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow, render, mount } from 'enzyme';
import '../matchMedia'
import { ProductDetailed } from '../components/Products/ProductDetailed'
Enzyme.configure({ adapter: new Adapter() });

global.shallow = shallow
global.render = render
global.mount = mount

describe('Brand component', () => {
	it('Brand component render', () => {
		const wrapper = shallow(<ProductDetailed />);
		expect(wrapper).toMatchSnapshot();
	});
});