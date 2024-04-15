import React, { useState } from 'react';

function ItemFilter({updateFilter}) {
  const [filters, setFilters] = useState({
    id: '',
    name: '',
    classification: '',
    borrowStatus: '',
    playstyle: ''
  });

  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    const updatedFilters = { ...filters, [name]: value };
    setFilters(updatedFilters);
    updateFilter(updatedFilters); // Call the updateFilter function with the updated filters
  };
  return (
    <div className='filter'>
       <div>
        {/* <div className='itemFilter_id'>
          Instrument Id:<input type="text" name="id" value={filters.id} onChange={handleFilterChange} />
        </div> */}
        <div className='itemFilter_name'>
          Instrumenr Name:<input name="name" value={filters.name} onChange={handleFilterChange} />
        </div>
        <div className='itemFilter_classification'>
          Classification:
          <input
            type="radio"
            name="classification"
            value=""
            checked={filters.classification === ""}
            onChange={handleFilterChange}
          />All
          <input
            type="radio"
            name="classification"
            value="western"
            checked={filters.classification === "western"}
            onChange={handleFilterChange}
          />Western
          <input
            type="radio"
            name="classification"
            value="chinese"
            checked={filters.classification === "chinese"}
            onChange={handleFilterChange}
          />Chinese
        </div>
        <div className='itemFilter_borrow_status'>
          Borrow Status:
          <input
            type="radio"
            name="borrowStatus"
            value=""
            checked={filters.borrowStatus === ""}
            onChange={handleFilterChange}
          />All
          <input
            type="radio"
            name="borrowStatus"
            value="storing"
            checked={filters.borrowStatus === "storing"}
            onChange={handleFilterChange}
          />Storing
          <input
            type="radio"
            name="borrowStatus"
            value="out"
            checked={filters.borrowStatus === "out"}
            onChange={handleFilterChange}
          />Out
        </div>
        <div className='itemFilter_playstyle'>
          Play Style:
          <select name="playstyle" value={filters.playstyle} onChange={handleFilterChange}>
            <option value="">All</option>
            <option value="String">String</option>
            <option value="woodwind">woodwind</option>
            <option value="brass">brass</option>
            <option value="percussion">percussion</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default ItemFilter;