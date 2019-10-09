import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow, render, mount } from 'enzyme';
import '../matchMedia'
import Brand from '../components/navbar/Brand'
Enzyme.configure({ adapter: new Adapter() });

global.shallow = shallow
global.render = render
global.mount = mount

describe('Brand component', () => {
	it('Brand component render', () => {
		const wrapper = shallow(<Brand />);
		expect(wrapper).toMatchSnapshot();
	});
});
