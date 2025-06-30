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
        <div className='grid grid-cols-2'>
          <div>
            <img src='#'/>
          </div>
          <div>
            <p>Why Choose Syolo Travel ?</p>
            <p>Syolo Travel offers personalized, affordable, and hassle-free travel experiences. 
              With expert planning, exclusive deals, and 24/7 support, 
              we ensure every trip is smooth and memorable.</p>
              <div className='flex gap-3'>
                <div className='bg-orange-300 text-3xl rounded-lg self-start p-2'>
                  <CiMap className='text-white'/>
                </div>
                <div>
                  <p>Customized Itineraries:</p>
                  <p>Tailor-made travel plans to match your interests, budget, and time.</p>
                </div>
              </div>
              <div className='flex gap-3'>
                <div className='bg-orange-300 text-3xl rounded-lg self-start p-2'>
                  <CiUser className='text-white'/>
                </div>
                <div>
                  <p>Expert Guidance:</p>
                  <p>Local guides and travel experts ensure you get the most out of your trip.</p>
                </div>
              </div>
             <div className='flex gap-3'>
                <div className='bg-orange-300 text-3xl rounded-lg self-start p-2'>
                  <BsTags className='text-white'/>
                </div>
                <div>
                  <p>Affordable Packages:</p>
                  <p>Competitive pricing with no hidden costs.</p>
                </div>
              </div>
              <div className='flex gap-3'>
                <div>
                  <IoLeafOutline />
                </div>
                <div>
                  <p>Eco-Friendly Travel:</p>
                  <p>Focus on sustainable and responsible tourism practices.</p>
                </div>
              </div>
              <div className='flex gap-3'>
                <div>
                  <CiGlobe/> 
                </div>
                <div>
                  <p>Seamless Experience:</p>
                  <p>End-to-end travel support, including accommodations, transport, and activities.</p>
                </div>
              </div>
              
          </div>

        </div>
    
    </>
  )
}

export default WhyChoose