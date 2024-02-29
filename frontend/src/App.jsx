import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Table from './Table';
import Pagination from './Pagination';
import SearchBar from './SearchBar';

const App = () => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 20;

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:3001/'); // Update URL
      console.log(response, "result")
      setData(response.data);

    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  // ... (rest of the component)
  const filteredData = () => {
    console.log(data, "hello")
    return data.filter(
      (item) =>
        item.customer_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.location.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  const renderTableData = () => {
    const startIndex = (currentPage - 1) * recordsPerPage;
    const endIndex = startIndex + recordsPerPage;
    return filteredData().slice(startIndex, endIndex);
  };

  const handleSearchChange = (value) => {
    setSearchTerm(value);
    setCurrentPage(1);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const totalPages = Math.ceil(filteredData().length / recordsPerPage);


  return (
    <div className="App">
      <h1>Customer Data</h1>
      <SearchBar searchTerm={searchTerm} onSearchChange={handleSearchChange} />
      <Table data={renderTableData()} />
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
    </div>
  );
};

export default App;
