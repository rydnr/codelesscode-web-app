// src/tests/LogWatch.test.js
import React from 'react';
import { shallow } from 'enzyme';
import LogWatch from '../LogWatch';
import LogWatchEntry from '../LogWatchEntry';
import ReactTable from 'react-table';

describe('LogWatch', () => {
  const columns = [{
    Header: 'Timestamp',
    accessor: 'timestamp',
  },{
    Header: 'Text',
    accessor: 'text',
  }];

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

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<LogWatch logEntries={data}></LogWatch>);
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

  it('renders a number of <LogWatchEntry> items only if htmlTable is enabled', () => {
    wrapper.setProps({ htmlTable: true });
    expect(wrapper.children().length).toBe(data.length);
    data.map(function(item, index) {
      expect(wrapper.childAt(index).type()).toBe(LogWatchEntry);
    });
  });

  it('doesn\'t render any <LogWatchEntry> items if htmlTable is not enabled', () => {
    wrapper.setProps({ htmlTable: false });
    expect(wrapper.children().length).toBe(0);
  });

  it('provides the <LogWatchEntry> information in the "data" prop of ReactTable', () => {
    wrapper.setProps({ htmlTable: false });
    expect(wrapper.prop('data')).toEqual(data);
  });
});
