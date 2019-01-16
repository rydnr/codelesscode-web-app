// src/tests/LogWatch.test.js
import React from 'react';
import { shallow } from 'enzyme';
import LogWatch from '../LogWatch';
import LogWatchEntry from '../LogWatchEntry';
import ReactTable from 'react-table';

describe('LogWatch', () => {
  const text = 'sample text';
  const columns = [{
    Header: 'Timestamp',
    accessor: 'timestamp',
  },{
    Header: 'Text',
    accessor: 'text',
  }];

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
        <LogWatch>
          <LogWatchEntry timestamp='2010/03/11 10:30:07'>Starting up</LogWatchEntry>
          <LogWatchEntry timestamp='2010/03/11 10:31:57'>Accepting requests</LogWatchEntry>
          <LogWatchEntry timestamp='2018/12/31 23:59:59'>Shutting down</LogWatchEntry>
        </LogWatch>);
  });

  it('renders a <table> if htmlTable is enabled', () => {
    wrapper.setProps({ htmlTable: true });
    expect(wrapper.type()).toBe('table');
  });

  it('renders a <ReactTable> by default', () => {
    expect(wrapper.type()).toBe(ReactTable);
  });

  it('renders two columns', () => {
    expect(wrapper.prop('columns')).toEqual(columns);
  });

  it('renders a number of <LogWatchEntry> items', () => {
    expect(wrapper.children().length).toBe(3);
  });
});
