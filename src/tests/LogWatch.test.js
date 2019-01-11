// src/tests/LogWatch.test.js
import React from 'react';
import { shallow } from 'enzyme';
import LogWatch from '../LogWatch';

describe('LogWatch', () => {
  const text = 'sample text';
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<LogWatch>{text}</LogWatch>);
  });

  it('renders a <div>', () => {
    expect(wrapper.type()).toBe('div');
  });

  it('passes `children` through to the <div>', () => {
    expect(wrapper.prop('children')).toBe(text);
  });

  it('passes other props through to the <div>', () => {
    const onClick = () => {};
    const className = 'my-logwatch';
    const dataAction = 'refresh';
    wrapper.setProps({ onClick, className, 'data-action': dataAction});
    expect(wrapper.prop('onClick')).toBe(onClick);
    expect(wrapper.prop('className')).toBe(className);
    expect(wrapper.prop('data-action')).toBe(dataAction);
  });
});
