// src/LogWatch.js
import React from 'react';
import propTypes from 'prop-types';
import ReactTable from 'react-table';

const columns = [{
  Header: 'Timestamp',
  accessor: 'timestamp',
},{
  Header: 'Text',
  accessor: 'text',
}];

class LogWatch extends React.PureComponent {

  renderAsHtmlTable() {
    return (<table>{this.props.children}</table>);
  }

  renderAsReactTable() {
    return (<ReactTable columns={columns}>{this.props.children}</ReactTable>);
  }

  render() {
    const { htmlTable } = this.props;
    if (htmlTable) {
      return this.renderAsHtmlTable();
    } else {
      return this.renderAsReactTable();
    }
  }
}

LogWatch.propTypes = {
  children: propTypes.node.isRequired,
};

export default LogWatch;
