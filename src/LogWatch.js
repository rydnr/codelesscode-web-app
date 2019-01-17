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

  itemsAsJson() {
    return (this.props.children.map(function(item) {
      const { timestamp, children } = item.props;
      return { timestamp: timestamp , text: children };
    }));
  }

  renderAsHtmlTable() {
    return (<table>{this.props.children}</table>);
  }

  renderAsReactTable() {
    const data = this.itemsAsJson();
    return (<ReactTable columns={columns} data={data}></ReactTable>);
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
  htmlTable: propTypes.bool,
};

export default LogWatch;
