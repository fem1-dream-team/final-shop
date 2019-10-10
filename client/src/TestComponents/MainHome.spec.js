import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import '../matchMedia'
import { Home } from '../components/Home/Home';

configure({ adapter: new Adapter() });

describe('MainHome component', () => {
	it('MainHome component render', () => {
		const wrapper = shallow(<Home />);
		expect(wrapper).toMatchSnapshot();
	});
});