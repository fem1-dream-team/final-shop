import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow, render, mount } from 'enzyme';

Enzyme.configure({ adapter: new Adapter() });

global.shallow = shallow
global.render = render
global.mount = mount