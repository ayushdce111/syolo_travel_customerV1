// components/FilterSidebar.jsx
import React from 'react';

const FilterSidebar = ({ filters, onFilterChange }) => {
  return (
    <div className="w-64 bg-gray-100 p-4 space-y-4">
      <div className='border-1 border-gray-300 p-2'>
        <h2 className="text-lg">Filters</h2>
      </div>

      {filters.map((filter) => (
        <div key={filter.label} className="space-y-2">
          <p className="text-sm font-medium bg-[#00809D] text-white p-2">{filter.label}</p>
          {filter.options.map((option) => (
            <label key={option.value} className="block text-sm cursor-pointer">
              <input
                type="checkbox"
                checked={option.checked}
                onChange={() => onFilterChange(filter.label, option.value)}
                className="mr-2 "
              />
              {option.label}
            </label>
          ))}
        </div>
      ))}
    </div>
  );
};

export default FilterSidebar;
