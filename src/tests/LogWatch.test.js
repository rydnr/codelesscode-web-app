// src/tests/LogWatch.test.js
import React from 'react';
import { shallow } from 'enzyme';
import LogWatch from '../LogWatch';
import ReactTable from 'react-table';

describe('LogWatch', () => {
  const text = 'sample text';
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<LogWatch>{text}</LogWatch>);
  });

  it('renders a <ReactTable>', () => {
    expect(wrapper.type()).toBe(ReactTable);
  });
});
