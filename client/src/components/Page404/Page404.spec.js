import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'
import {Page404} from './Page404'

configure({adapter: new Adapter()});

describe('Page404 component', () => {
	it('Page404 component render', () => {
		const wrapper = shallow(<Page404 />);
		expect(wrapper).toMatchSnapshot();
	});

	it('Page404 with prop component render', () => {
		const wrapper = shallow(<Page404 type="sale"/>);
		expect(wrapper).toMatchSnapshot();
	});
});