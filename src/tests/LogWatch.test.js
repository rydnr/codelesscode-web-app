// src/tests/LogWatch.test.js
import React from 'react';
import { shallow } from 'enzyme';
import LogWatch from '../LogWatch';
import LogWatchEntry from '../LogWatchEntry';
import ReactTable from 'react-table';

describe('LogWatch', () => {

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
    expect(wrapper.find('table').type()).toBe('table');
  });

  it('renders a <ReactTable> by default', () => {
    expect(wrapper.find(ReactTable).at(0).type()).toBe(ReactTable);
  });

  it('renders two columns', () => {
    expect(wrapper.find('ReactTable').at(0).prop('columns')).toEqual(LogWatch.columns);
  });

  it('renders a number of <LogWatchEntry> items only if htmlTable is enabled', () => {
    wrapper.setProps({ htmlTable: true });
    expect(wrapper.find('table').at(0).children().length).toBe(data.length);
    data.map(function(item, index) {
      expect(wrapper.find('table').at(0).childAt(index).type()).toBe(LogWatchEntry);
    });
  });

  it('doesn\'t render any <LogWatchEntry> items if htmlTable is not enabled', () => {
    wrapper.setProps({ htmlTable: false });
    expect(wrapper.children().length).toBe(2);
  });

  it('provides the log entries in the "data" prop of ReactTable', () => {
    wrapper.setProps({ htmlTable: false });
    expect(wrapper.find(ReactTable).at(0).prop('data')).toEqual(data);
  });
});
