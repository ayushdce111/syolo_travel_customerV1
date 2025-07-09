// components/SearchResults.jsx
import React from 'react';
import { Link} from 'react-router-dom';
import { MdCurrencyRupee } from "react-icons/md";

const SearchResults = ({ results }) => {
  return (
    <div className="p-4 grid grid-cols-5 gap-3">
      {results.length === 0 ? (
        <p>No results found.</p>
      ) : (
        results.map((item, index) => (
          
         <Link to={`/packagepage/${item._id}`}  key={index} className="shadow-sm shadow-[#000] rounded-md p-2">
            <div className=' h-[20vh] bg-gray-500 rounded-md'>
                <img src={item.image_url} className='rounded-md w-full h-full '/>
            </div>
            <h3 className="font-bold">Title - {item.title}</h3>
            {/* <p className="text-sm text-gray-600">description - {item.description}</p> */}
            <p className="text-sm text-gray-600">{item.travelcategory} Travel Package</p>
            <p className="text-sm text-gray-600 flex items-center"><MdCurrencyRupee size={15}/>{item.prices}</p>

            {/* <p className="text-sm text-gray-600">availability - {item.availability}</p> */}
            {/* <p className="text-sm text-gray-600">destinations - {item.destinations}</p> */}
            <p className="text-sm text-gray-600">{item.duration} Days</p>
            {/* <p className="text-sm text-gray-600">inclusions - {item.inclusions}</p> */}
            {/* <p className="text-sm text-gray-600">travelMode - {item.travelMode}</p> */}
            
          </Link>
        
        ))
      )}
    </div>
  );
};

export default SearchResults;
