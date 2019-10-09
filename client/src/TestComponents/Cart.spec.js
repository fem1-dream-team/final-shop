import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import '../matchMedia'
import { Cart } from '../components/ComponentsForNavigation/Cart';

configure({ adapter: new Adapter() });

describe('Cart component', () => {
	it('Cart component render', () => {
		const wrapper = shallow(<Cart />);
		expect(wrapper).toMatchSnapshot();
	});
});