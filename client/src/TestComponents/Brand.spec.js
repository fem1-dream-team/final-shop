import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow } from 'enzyme';
import '../matchMedia'
import Brand from '../components/navbar/Brand'

configure({ adapter: new Adapter() });

describe('Brand component', () => {
	it('Brand component render', () => {
		const wrapper = shallow(<Brand />);
		expect(wrapper).toMatchSnapshot();
	});
});
