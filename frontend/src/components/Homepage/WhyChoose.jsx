import React from 'react';
import { CiMap } from "react-icons/ci";
import { LuTags } from "react-icons/lu";
import { CiUser } from "react-icons/ci";
import { BsTags } from "react-icons/bs";
import { IoLeafOutline } from "react-icons/io5";
import { CiGlobe } from "react-icons/ci";





const WhyChoose = () => {
  return (
    <>
        <div className='grid grid-cols-1 md:grid-cols-2 py-12 px-5'>
          
          <div>
            <p className='text-3xl text-[#0D3F63] font-bold'>Why Choose Syolo Travel ?</p>
            <p className='mt-2 text-[#0D3F63]'>Syolo Travel offers personalized, affordable, and hassle-free travel experiences. 
              With expert planning, exclusive deals, and 24/7 support, 
              we ensure every trip is smooth and memorable.</p>
              <div className='flex items-center gap-3 mt-3'>
                <div className='bg-[#FF7601] text-3xl rounded-lg self-start p-2'>
                  <CiMap className='text-white' size={25}/>
                </div>
                <div className='text-[#0D3F63]'>
                  <p>Customized Itineraries:</p>
                  <p>Tailor-made travel plans to match your interests, budget, and time.</p>
                </div>
              </div>
              <div className='flex gap-3 mt-3'>
                <div className='bg-[#FF7601] text-3xl rounded-lg self-start p-2'>
                  <CiUser className='text-white' size={25}/>
                </div>
                <div className='text-[#0D3F63]'>
                  <p>Expert Guidance:</p>
                  <p>Local guides and travel experts ensure you get the most out of your trip.</p>
                </div>
              </div>
             <div className='flex gap-3 mt-3'>
                <div className='bg-[#FF7601] text-3xl rounded-lg self-start p-2'>
                  <BsTags className='text-white' size={25}/>
                </div>
                <div className='text-[#0D3F63]'>
                  <p>Affordable Packages:</p>
                  <p>Competitive pricing with no hidden costs.</p>
                </div>
              </div>
              <div className='flex gap-3 mt-3'>
                <div className='bg-[#FF7601] text-3xl rounded-lg self-start p-2'>
                  <IoLeafOutline className='text-white' size={25}/>
                </div>
                <div className='text-[#0D3F63]'>
                  <p>Eco-Friendly Travel:</p>
                  <p>Focus on sustainable and responsible tourism practices.</p>
                </div>
              </div>
              <div className='flex gap-3 mt-3'>
                <div className='bg-[#FF7601] rounded-lg self-start p-2'>
                  <CiGlobe className='text-white' size={25}/>
                </div>
                <div className='text-[#0D3F63]'>
                  <p>Seamless Experience:</p>
                  <p>End-to-end travel support, including accommodations, transport, and activities.</p>
                </div>
              </div>
              
          </div>
<div className='grid place-items-center'>
            <img src='./images/whyBanner.png'/>
          </div>
        </div>
    
    </>
  )
}

export default WhyChoose