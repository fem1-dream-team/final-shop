import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow, render, mount } from 'enzyme';
import '../matchMedia'
import { SimpleSlider } from '../components/SimpleSlider'
Enzyme.configure({ adapter: new Adapter() });

global.shallow = shallow
global.render = render
global.mount = mount

describe('SimpleSlider component', () => {
	it('SimpleSlider component render', () => {
		const wrapper = shallow(<SimpleSlider />);
		expect(wrapper).toMatchSnapshot();
	});
});