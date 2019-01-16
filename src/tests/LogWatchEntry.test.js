// src/tests/LogWatchEntry.test.js
import React from 'react';
import { shallow } from 'enzyme';
import LogWatchEntry from '../LogWatchEntry';

describe('LogWatchEntry', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<LogWatchEntry />);
  });

  it('renders a <tr>', () => {
    expect(wrapper.type()).toBe('tr');
  });

  it('renders two <td>s as children', () => {
    expect(wrapper.children().length).toBe(2);
    expect(wrapper.childAt(0).type()).toBe('td');
    expect(wrapper.childAt(1).type()).toBe('td');
  });
});
