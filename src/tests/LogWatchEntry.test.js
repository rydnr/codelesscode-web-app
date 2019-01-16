// src/tests/LogWatchEntry.test.js
import React from 'react';
import { shallow } from 'enzyme';
import LogWatchEntry from '../LogWatchEntry';

describe('LogWatchEntry', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<LogWatchEntry />);
  });

  it('renders a <div>', () => {
    expect(wrapper.type()).toBe('div');
  });
});
