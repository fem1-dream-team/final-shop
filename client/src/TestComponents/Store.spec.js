import React from 'react';
import store from '../store'
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

configure({ adapter: new Adapter() });

describe('store component', () => {
	it('store component render', () => {
		const wrapper = shallow(<store />);
		expect(wrapper).toMatchSnapshot();
	});
});