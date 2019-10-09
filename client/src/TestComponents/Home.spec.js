import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import { Home } from '../components/Home';

configure({ adapter: new Adapter() });

describe('Home component', () => {
	it('Home component render', () => {
		const wrapper = shallow(<Home />);
		expect(wrapper).toMatchSnapshot();
	});
});