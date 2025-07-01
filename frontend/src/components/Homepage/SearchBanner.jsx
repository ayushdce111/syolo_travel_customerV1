import React from 'react';
import { FaLocationDot } from "react-icons/fa6";
import { FaCalendarAlt } from "react-icons/fa";



const SearchBanner = () => {
  return (
    <div className='h-[80vh] grid grid-cols-1 place-items-center bg-[url(./images/67.jpg)] '>
       
        
            <div className='mx-auto w-[95%] h-[80%] flex flex-col gap-3 justify-center'>
            <h1 className='text-center text-4xl text-[#0D3F63] font-bold'>Search Travel Packages</h1>
                <form className='flex gap-4 items-center justify-center mt-4'>
                    <div className='relative'>
                        <input type='text' placeholder='Enter Location . . .' className='bg-white h-15 pl-10 outline-0 rounded outline-[#0D3F63] focus:outline-2 text-2xl'/>
                        <FaLocationDot className='absolute top-[28%] left-3' style={{color:"#0D3F63"}} size={25}/>
                    </div>
                    <div className='relative'>
                        <input type='text'placeholder='Select Month . . . ' className='bg-white h-15 pl-10 outline-0 rounded outline-[#0D3F63] focus:outline-2 text-2xl'/>
                        <FaCalendarAlt  className='absolute top-[28%] left-3' style={{color:"#0D3F63"}} size={25}/>
                    </div>
                    
                    
                    <button className='text-white bg-[#0D3F63] px-3 self-stretch text-2xl rounded'>Explore</button>
                    
                </form>
            </div>
       
    </div>
  )
}

export default SearchBanner