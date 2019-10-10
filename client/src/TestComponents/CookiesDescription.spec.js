import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import '../matchMedia'
import { CookiesDescription } from '../components/ComponentsForNavigation/Cookies'

configure({ adapter: new Adapter() });

describe('CookiesDescription component', () => {
	it('CookiesDescription component render', () => {
		const wrapper = shallow(<CookiesDescription />);
		expect(wrapper).toMatchSnapshot();
	});
});