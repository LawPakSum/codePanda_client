import React, { useState } from 'react';

function RecordFilter({updateRecordFilter}) {
    const [filters, setFilters] = useState({
        getTime:"",
        returnTime:"",
        returned:"",
    })

    const handleInputChange = (e) => {
      const { name, value } = e.target;
      const updatedFilters = { ...filters, [name]: value };
      setFilters(updatedFilters);
      updateRecordFilter(updatedFilters); // Pass the updated filters to the updateRecordFilter function
    };
  return (
    <div>
        <label htmlFor="GetTime">Get Time:</label>
        <input
        type="date"
        id="getTime"
        name="getTime"
        value={filters.getTime}
        onChange={handleInputChange}
        />

        <label htmlFor="returnTime">Return Time:</label>
        <input
        type="date"
        id="returnTime"
        name="returnTime"
        value={filters.returnTime}
        onChange={handleInputChange}
        />

        <label htmlFor="returned">Returned:</label>
        <select
        id="returned"
        name="returned"
        value={filters.returned}
        onChange={handleInputChange}
        >
        <option value="">All</option>
        <option value="yes">Yes</option>
        <option value="no">No</option>
        </select>
    </div>
  );
}

export default RecordFilter;