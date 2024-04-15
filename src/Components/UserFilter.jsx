import React, { useState } from 'react';

function UserFilter({ updateFilter }) {
  const [filters, setFilters] = useState({
    id: "",
    name: ""
  });

  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    setFilters((prevFilters) => {
      const updatedFilters = { ...prevFilters, [name]: value };
      updateFilter(updatedFilters); // Call the updateFilter function with the updated filters
      return updatedFilters;
    });
  };

  return (
    <div>
      <div className='userFilter'>
        <div className='userFilter_id'><input type="text" name="id" value={filters.id} onChange={handleFilterChange} /></div>
        <div className='userFilter_name'>User name:<input type="text" name="name" value={filters.name} onChange={handleFilterChange} /></div>
      </div>
    </div>
  );
}

export default UserFilter;