// components/SortDropdown.jsx
import React from 'react';

const SortDropdown = ({ sortOption, onChange }) => {
  return (
    <div className="p-4 flex justify-end">
      <select
        value={sortOption}
        onChange={(e) => onChange(e.target.value)}
        className="border border-gray-300 rounded px-3 py-2"
      >
        <option value="">Sort by</option>
        <option value="price-low-high">Price: Low to High</option>
        <option value="price-high-low">Price: High to Low</option>
      </select>
    </div>
  );
};

export default SortDropdown;
