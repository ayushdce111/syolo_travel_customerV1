// pages/SearchPage.jsx
import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBanner.jsx';
import FilterSidebar from './FilterSidebar';
import SearchResults from './SearchResults';
import SortDropdown from './SortDropdown';
// import usePackagesHome from "../PackagesUnit/PackagesHome.jsx";
import usePackagesHome from "../Homepage/PackagesUnit/PackagesHome.jsx";

const initialFilters = [
  {
    label: 'Category',
    options: [
      { label: 'International', value: 'International', checked: false },
      { label: 'Domestic', value: 'Domestic', checked: false },
      { label: 'Adventure', value: 'Adventure', checked: false },

      
    ],
  },
  {
    label: 'Price',
    options: [
      { label: '0 - 50', value: '0-50', checked: false },
      { label: '50 - 100', value: '50-100', checked: false },
    ],
  },
];


const ITEMS_PER_PAGE = 5;

const SearchPage = () => {
  const CompletePackagesData = usePackagesHome();
// console.log(CompletePackagesData)
  const [search, setSearch] = useState('');
  const [filters, setFilters] = useState(initialFilters);
  const [sortOption, setSortOption] = useState('');
  const [filteredResults, setFilteredResults] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const getActiveFilters = () => {
    const selected = {};
    filters.forEach((filter) => {
      selected[filter.label.toLowerCase()] = filter.options
        .filter((opt) => opt.checked)
        .map((opt) => opt.value);
    });
    return selected;
  };

  useEffect(() => {
    const activeFilters = getActiveFilters();

    // let filtered = mockData.filter((item) => {
          let filtered = CompletePackagesData.filter((item) => {

      const matchesSearch =
        item.title.toLowerCase().includes(search.toLowerCase()) ||
        item.description.toLowerCase().includes(search.toLowerCase()) ||
        item.travelcategory.toLowerCase().includes(search.toLowerCase());

      const matchesCategory =
        activeFilters.category?.length > 0
          ? activeFilters.category.includes(item.travelcategory)
          : true;
// console.log(activeFilters.category,"=============",item.travelcategory);
      const matchesPrice =
        activeFilters.price?.length > 0
          ? activeFilters.price.some((range) => {
              const [min, max] = range.split('-').map(Number);
              // console.log(item.price,"===item.price")
              return item.prices >= min && item.prices <= max;
            })
          : true;
          // console.log(activeFilters.price,"=====activeFilters.price")

      return matchesSearch && matchesCategory && matchesPrice;
    });

    // Sort results
    if (sortOption === 'price-low-high') {
      filtered.sort((a, b) => a.prices - b.prices);
    } else if (sortOption === 'price-high-low') {
      filtered.sort((a, b) => b.prices - a.prices);
    }
// console.log(filtered,"=======filtered")
    setFilteredResults(filtered);
    setCurrentPage(1); // Reset to first page on filter/sort change
  }, [search, filters, sortOption, CompletePackagesData]);

  // Pagination logic
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedResults = filteredResults.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  const totalPages = Math.ceil(filteredResults.length / ITEMS_PER_PAGE);

  const handleFilterChange = (label, value) => {
    // console.log("handleFilterChange");
    const newFilters = filters.map((filter) =>
      filter.label === label
        ? {
            ...filter,
            options: filter.options.map((opt) =>
              opt.value === value ? { ...opt, checked: !opt.checked } : opt
            ),
          }
        : filter
    );
    setFilters(newFilters);
    // console.log(filters, "===", label,"===",value)
  };

  const handleClearFilters = () => {
    // console.log("handleClearFilters");
    const cleared = filters.map((filter) => ({
      ...filter,
      options: filter.options.map((opt) => ({ ...opt, checked: false })),
    }));
    setFilters(cleared);
    setSearch('');
    setSortOption('');
  };

  return (
    <div className="min-h-screen">
      <SearchBar value={search} onChange={(e) => setSearch(e.target.value)} />
      <div className="flex">
        <div className="w-64 bg-gray-100 p-4 space-y-4">
          <FilterSidebar filters={filters} onFilterChange={handleFilterChange} />
          <button
            onClick={handleClearFilters}
            className="w-full mt-4 text-sm bg-[#FF7601] text-white py-2 px-4 rounded font-bold cursor-pointer"
          >
            Clear Filters
          </button>
        </div>

        <div className="flex-1 bg-white">
          <SortDropdown sortOption={sortOption} onChange={setSortOption} />
          <SearchResults results={paginatedResults} />

          {/* Pagination Controls */}
          <div className="flex justify-center items-center space-x-2 p-4">
            <button
              onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
              disabled={currentPage === 1}
              className="px-3 py-1 border border-[#00809D] rounded disabled:opacity-50"
            >
              Prev
            </button>
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                className={`px-3 py-1 border border-[#00809D] rounded ${
                  currentPage === i + 1 ? 'bg-blue-500 text-white' : ''
                }`}
              >
                {i + 1}
              </button>
            ))}
            <button
              onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="px-3 py-1 border rounded disabled:opacity-50 border-[#00809D]"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
