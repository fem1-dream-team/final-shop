import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import '../matchMedia'
import { Categories } from '../components/Categories';

configure({ adapter: new Adapter() });

describe('Categories component', () => {
	it('Categories component render', () => {
		const wrapper = shallow(<Categories />);
		expect(wrapper).toMatchSnapshot();
	});
});