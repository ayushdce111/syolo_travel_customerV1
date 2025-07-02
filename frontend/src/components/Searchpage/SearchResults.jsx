// components/SearchResults.jsx
import React from 'react';

const SearchResults = ({ results }) => {
  return (
    <div className="p-4 flex gap-3">
      {results.length === 0 ? (
        <p>No results found.</p>
      ) : (
        results.map((item, index) => (
          
          <div key={index} className="border p-2">
            <div className='w-[12vw] h-[20vh] bg-gray-500'>
                <img src='#' />
            </div>
            <h3 className="font-bold">Title - {item.title}</h3>
            <p className="text-sm text-gray-600">description - {item.description}</p>
            <p className="text-sm text-gray-600">travelcategory - {item.travelcategory}</p>
            <p className="text-sm text-gray-600">prices - {item.prices}</p>

            <p className="text-sm text-gray-600">availability - {item.availability}</p>
            <p className="text-sm text-gray-600">destinations - {item.destinations}</p>
            <p className="text-sm text-gray-600">duration - {item.duration}</p>
            <p className="text-sm text-gray-600">inclusions - {item.inclusions}</p>
            <p className="text-sm text-gray-600">travelMode - {item.travelMode}</p>
            
          </div>
        
        ))
      )}
    </div>
  );
};

export default SearchResults;
