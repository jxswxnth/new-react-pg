import React from 'react';
import { Table as BootstrapTable } from 'react-bootstrap';

const Table = ({ data, onSort, optionSort }) => {
  if (data.length === 0) {
    return <p>No data available</p>;
  }

  const tableHeaders = Object.keys(data[0]);

  const renderTableHeaders = () => {
    return tableHeaders.map((header) => {
      return < th key={header} onClick={() => onSort(header)}>
        {header}
      </th >
    });
  };

  const renderTableBody = () => {
    return data.map((row) => (
      <tr key={row.sno}>
        {tableHeaders.map((header) => (
          <td key={header}>{row[header]}</td >
        ))}
      </tr>
    ));
  };

  return (
    <>
      <BootstrapTable striped bordered hover>
        <thead>
          <tr>{renderTableHeaders()}</tr>
        </thead>
        <tbody>{renderTableBody()}</tbody>
      </BootstrapTable>
    </>
  );
};

export default Table;
