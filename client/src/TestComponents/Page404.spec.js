import React from 'react';
import { Page404 } from '../components/Page404/Page404';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow, render, mount } from 'enzyme';

Enzyme.configure({ adapter: new Adapter() });

global.shallow = shallow
global.render = render
global.mount = mount

describe('Page404 component', () => {
	it('Page404 component render', () => {
		const wrapper = shallow(<Page404 />);
		expect(wrapper).toMatchSnapshot();
	});
});