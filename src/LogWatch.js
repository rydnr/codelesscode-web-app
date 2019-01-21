// src/LogWatch.js
import React from 'react';
import PropTypes from 'prop-types';
import LogWatchBar from './LogWatchBar';
import LogWatchEntry from './LogWatchEntry';
import ReactTable from 'react-table';

class LogWatch extends React.PureComponent {

  static propTypes = {
    logEntries: PropTypes.arrayOf(PropTypes.shape({
      timestamp: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    })).isRequired,
    htmlTable: PropTypes.bool,
  };

  static defaultProps = {
    htmlTable: false,
  };

  static columns = [{
    Header: 'Timestamp',
    accessor: 'timestamp',
    Cell: row => (
        <div
          style={{
            width: '100%',
            height: '100%',
            backgroundColor: '#dadada',
            borderRadius: '2px'
          }}>
        <div
          style={{
            width: `${row.value}%`,
            height: '100%',
            backgroundColor: row.value > 66 ? '#85cc00'
              : row.value > 33 ? '#ffbf00'
              : '#ff2e00',
            borderRadius: '2px',
            transition: 'all .2s ease-out'
          }} />
        </div>
    )
  },{
    Header: 'Text',
    accessor: 'text',
    Cell: row => (
        <div
          style={{
            width: '100%',
            height: '100%',
            backgroundColor: '#dadada',
            borderRadius: '2px'
          }}>
        <div
          style={{
            width: `${row.value}%`,
            height: '100%',
            backgroundColor: row.value > 66 ? '#85cc00'
              : row.value > 33 ? '#ffbf00'
              : '#ff2e00',
            borderRadius: '2px',
            transition: 'all .2s ease-out'
          }}/>
        </div>
    )
  }];

  renderLogWatchEntries(props) {
    let entries = [];

    const { logEntries } = props;

    logEntries.forEach((item, index) => {
      const key = 'log-' + index;
      entries.push(<LogWatchEntry key={key} timestamp={item.timestamp}>{item.text}</LogWatchEntry>);
    });

    return entries;
  };

  renderAsHtmlTable() {
    return (<><LogWatchBar /><table>{this.renderLogWatchEntries(this.props)}</table></>);
  }

  renderAsReactTable() {
    return (<><LogWatchBar /><ReactTable columns={LogWatch.columns} data={this.props.logEntries}></ReactTable></>);
  }

  render() {
    const { htmlTable, logEntries } = this.props;

    if (htmlTable) {
      return this.renderAsHtmlTable();
    } else {
      return this.renderAsReactTable();
    }
  }
}

export default LogWatch;
