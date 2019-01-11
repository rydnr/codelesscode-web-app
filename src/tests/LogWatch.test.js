// src/tests/LogWatch.test.js
import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import LogWatch from '../LogWatch';

configure({ adapter: new Adapter() });

describe('LogWatch', () => {
  it('renders a <div>', () => {
    const wrapper = shallow(<LogWatch />);
    expect(wrapper.type()).toBe('div');
  });

  it('passes `children` through to the <div>', () => {
    const text = 'sample text';
    const wrapper = shallow(<LogWatch>{text}</LogWatch>);
    expect(wrapper.prop('children')).toBe(text);
  });
});
