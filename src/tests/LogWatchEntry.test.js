// src/tests/LogWatchEntry.test.js
import React from 'react';
import { shallow } from 'enzyme';
import LogWatchEntry from '../LogWatchEntry';

describe('LogWatchEntry', () => {
  const timestamp = '2019/01/16 21:35:17';
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<LogWatchEntry timestamp={timestamp} />);
  });

  it('renders a <tr>', () => {
    expect(wrapper.type()).toBe('tr');
  });

  it('renders two <td>s as children', () => {
    expect(wrapper.children().length).toBe(2);
    expect(wrapper.childAt(0).type()).toBe('td');
    expect(wrapper.childAt(1).type()).toBe('td');
  });

  it('passes `timestamp` through to the first child', () => {
    expect(wrapper.childAt(0).text()).toBe(timestamp);
  });
});
