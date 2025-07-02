import React from 'react';
import { FaLocationDot } from "react-icons/fa6";
import { FaCalendarAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';


const SearchBanner = () => {
  
  const currentPage = window.location.pathname;
  const activeExploreLink = currentPage==="/" ? "/searchpage/" : "";

  console.log(currentPage,"<========currentPage")

  return (
    <div className='h-[45vh] md:h-[80vh] grid grid-cols-1 place-items-center  ' style={{background:'linear-gradient(0deg, rgb(106 106 106 / 68%), rgb(255 255 255 / 13%)), url(./images/search_banner.png)'}}>
       
        
            <div className='mx-auto w-[95%] h-[80%] flex flex-col gap-3 justify-center'>
            <h1 className='text-center text-4xl text-[#0D3F63] font-bold'>Search Travel Packages</h1>
                <form className='flex flex-col gap-6 items-center justify-center mt-4 md:flex-row md:gap-4'>
                    <div className='relative'>
                        <input type='text' placeholder='Enter Location . . .' className='bg-white h-15 pl-10 outline-0 rounded outline-[#0D3F63] focus:outline-2 text-2xl'/>
                        <FaLocationDot className='absolute top-[28%] left-3' style={{color:"#0D3F63"}} size={25}/>
                    </div>
                    <div className='relative'>
                        <input type='text'placeholder='Select Month . . . ' className='bg-white h-15 pl-10 outline-0 rounded outline-[#0D3F63] focus:outline-2 text-2xl'/>
                        <FaCalendarAlt  className='absolute top-[28%] left-3' style={{color:"#0D3F63"}} size={25}/>
                    </div>
                    
                    
                    <Link to={activeExploreLink} className='text-white bg-[#0D3F63] px-3 py-2 text-2xl rounded'>Explore</Link>
                    
                </form>
            </div>
       
    </div>
  )
}

export default SearchBanner