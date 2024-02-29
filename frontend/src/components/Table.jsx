// Table.jsx

import React from 'react';
import { Table as BootstrapTable } from 'react-bootstrap';

const Table = ({ data, onSort }) => {
  if (data.length === 0) {
    return <p>No data available</p>;
  }

  const tableHeaders = Object.keys(data[0]);

  const renderTableHeaders = () => {
    return tableHeaders.map((header) => {
      return header !== 'created_at' ?
        < th key={header}>
          {header}
        </th > : (
          <>< th key={header} onClick={() => onSort(header)}>
            date</th >
            < th onClick={() => onSort(header)}>
              time
            </th >
          </>)
    });
  };

  const renderTableBody = () => {
    return data.map((row) => (
      <tr key={row.sno}>
        {tableHeaders.map((header) => (
          <>
            {header !== 'created_at' ?
              <td key={header}>{row[header]}</td > : (
                <>
                  <td>{renderCreatedAtColumnsDate(row[header])}</td >
                  <td key={header}>{renderCreatedAtColumnsTime(row[header])}</td >
                </>)}
          </>
        ))}
      </tr>
    ));
  };

  const renderCreatedAtColumnsDate = (createdAt) => {
    const date = new Date(createdAt);
    const formattedDate = date.toLocaleDateString();
    return (
      <>{formattedDate}</>
    );
  };

  const renderCreatedAtColumnsTime = (createdAt) => {
    const date = new Date(createdAt);
    const formattedTime = date.toLocaleTimeString();
    return (
      <>{formattedTime}</>
    );
  };

  return (
    <BootstrapTable striped bordered hover>
      <thead>
        <tr>{renderTableHeaders()}</tr>
      </thead>
      <tbody>{renderTableBody()}</tbody>
    </BootstrapTable>
  );
};

export default Table;
