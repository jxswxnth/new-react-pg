// App.jsx

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Table from './components/Table';
import Pagination from './components/Pagination';
import SearchBar from './components/SearchBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import _ from 'lodash';

const App = () => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [sortField, setSortField] = useState(null);
  const [sortOrder, setSortOrder] = useState('asc');
  const recordsPerPage = 20;

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:3001/');
      setData(response.data.result);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const filteredData = () => {
    return data.filter(
      (item) =>
        item.customer_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.location.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  const handleSearchChange = (value) => {
    setSearchTerm(value);
    setCurrentPage(1);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleSort = (field) => {
    if (sortField === field) {
      // Toggle sort order if the same field is clicked
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      // Set new sort field and default sort order to 'asc'
      setSortField(field);
      setSortOrder('asc');
    }
  };

  const sortedData = () => {
    if (sortField) {
      return _.orderBy(filteredData(), [sortField], [sortOrder]);
    }

    return filteredData();
  };

  const totalRecords = sortedData().length;
  const totalPages = Math.ceil(totalRecords / recordsPerPage);

  const paginatedData = () => {
    const startIndex = (currentPage - 1) * recordsPerPage;
    const endIndex = startIndex + recordsPerPage;
    return sortedData().slice(startIndex, endIndex);
  };

  return (
    <div className="App">
      <h1>Customer Data</h1>
      <SearchBar searchTerm={searchTerm} onSearchChange={handleSearchChange} />
      <Table data={paginatedData()} onSort={handleSort} />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default App;
