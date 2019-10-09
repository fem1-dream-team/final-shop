import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow, render, mount } from 'enzyme';
import OrderHistory from '../components/Profile/OrderHistory/OrderHistory';

Enzyme.configure({ adapter: new Adapter() });

global.shallow = shallow
global.render = render
global.mount = mount

describe('OrderHistory component', () => {
	it('OrderHistory component render', () => {
		const wrapper = shallow(<OrderHistory />);
		expect(wrapper).toMatchSnapshot();
	});
});