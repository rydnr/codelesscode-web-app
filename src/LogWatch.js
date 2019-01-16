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

const LogWatch = () => <ReactTable columns={columns} />;


LogWatch.propTypes = {
  children: propTypes.node.isRequired,
};

export default LogWatch;
