import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import OrderHistory from '../components/Profile/OrderHistory/OrderHistory';

configure({ adapter: new Adapter() });

describe('OrderHistory component', () => {
	it('OrderHistory component render', () => {
		const wrapper = shallow(<OrderHistory />);
		expect(wrapper).toMatchSnapshot();
	});
});