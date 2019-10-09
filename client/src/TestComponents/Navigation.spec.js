import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import '../matchMedia'
import Navigation from '../components/Profile/Navigation/Navigation'

configure({ adapter: new Adapter() });

describe('Navigation component', () => {
	it('Navigation component render', () => {
		const wrapper = shallow(<Navigation />);
		expect(wrapper).toMatchSnapshot();
	});
});