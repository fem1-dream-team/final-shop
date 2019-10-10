import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import '../matchMedia'
import { SimpleSlider } from '../components/SimpleSlider'

configure({ adapter: new Adapter() });

describe('SimpleSlider component', () => {
	it('SimpleSlider component render', () => {
		const wrapper = shallow(<SimpleSlider />);
		expect(wrapper).toMatchSnapshot();
	});
});