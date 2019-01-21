// src/LogWatch.js
import React from 'react';
import PropTypes from 'prop-types';
import LogWatchEntry from './LogWatchEntry';
import ReactTable from 'react-table';

const columns = [{
  Header: 'Timestamp',
  accessor: 'timestamp',
},{
  Header: 'Text',
  accessor: 'text',
}];

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
    return (<table>{this.renderLogWatchEntries(this.props)}</table>);
  }

  renderAsReactTable() {
    return (<ReactTable columns={columns} data={this.props.logEntries}></ReactTable>);
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
