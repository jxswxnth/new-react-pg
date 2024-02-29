import React from 'react';
import { Table as BootstrapTable } from 'react-bootstrap';

const Table = ({ data }) => {
  if (data.length === 0) {
    return <p>No data available</p>;
  }

  const tableHeaders = Object.keys(data[0]);

  return (
    <BootstrapTable striped bordered hover>
      <thead>
        <tr>
          {tableHeaders.map((header) => (
            <th key={header}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <tr key={row.sno}>
            {tableHeaders.map((header) => (
              <td key={header}>{row[header]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </BootstrapTable>
  );
};

export default Table;