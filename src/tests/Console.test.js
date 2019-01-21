// src/tests/Console.test.js
import React from 'react';
import { shallow } from 'enzyme';
import Console from '../Console';
import LogWatch from '../LogWatch';

describe('Console', () => {
  let wrapper;

  beforeEach(() => {
    const data = [{
      timestamp: '2010/03/11 10:30:07',
      text: 'Starting up',
    },{
      timestamp: '2010/03/11 10:31:57',
      text: 'Accepting requests',
    },{
      timestamp: '2018/12/31 23:59:59',
      text: 'Shutting down',
    }];

    wrapper = shallow(<Console logEntries={data} />);
  });

  it('renders a <div>', () => {
    expect(wrapper.type()).toBe('div');
  });

  it('is initially disabled', () => {
    expect(wrapper.state('enabled')).toBe(false);
  });

  it('renders a LogWatch element', () => {
    expect(wrapper.find(LogWatch).at(0).type()).toBe(LogWatch);
  });
});
