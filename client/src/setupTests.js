// import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow, render, mount } from 'enzyme';
import {createSerializer} from 'enzyme-to-json';

configure({adapter: new Adapter()});
// Enzyme.configure({ adapter: new Adapter() });
expect.addSnapshotSerializer(createSerializer({mode: 'deep'}));

global.shallow = shallow
global.render = render
global.mount = mount

// console.error = message => {
//     throw new Error(message)
// }