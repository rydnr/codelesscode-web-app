// src/tests/Console.test.js
import React from 'react';
import { shallow } from 'enzyme';
import Console from '../Console';

describe('Console', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Console />);
  });

  it('renders a <div>', () => {
    expect(wrapper.type()).toBe('div');
  });

  it('is initially disabled', () => {
    expect(wrapper.state('enabled')).toBe(false);
  });
});
