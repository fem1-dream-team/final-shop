import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow, render, mount } from 'enzyme';
import '../matchMedia'
import { Categories } from '../components/Categories';
Enzyme.configure({ adapter: new Adapter() });

global.shallow = shallow
global.render = render
global.mount = mount

describe('Categories component', () => {
	it('Categories component render', () => {
		const wrapper = shallow(<Categories />);
		expect(wrapper).toMatchSnapshot();
	});
});