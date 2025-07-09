import React from 'react'

import Slider from 'react-slick';
import {NextArrowSliderUnit,PrevArrowSliderUnit} from "./BannerArrows.jsx";
import bannerdemo from "../../assets/images/bannerdemo.png";
import usePackagesHome from "./PackagesUnit/PackagesHome.jsx";
import { Link} from 'react-router-dom';

const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrowSliderUnit />,
    prevArrow: <PrevArrowSliderUnit />,
    responsive: [
      {
        breakpoint: 768, // For tablets
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480, // For mobile
        settings: {
          slidesToShow: 1,
        },
      },
    ],
    appendDots: dots => (
    <div
      style={{
        position: 'absolute',
        bottom: '10px',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        zIndex: 2,
      }}
    >
      <ul style={{ margin: 0 }}>{dots}</ul>
    </div>
  ),
  };

const SliderUnitDomestic = () => {
      const CompletePackagesData = usePackagesHome();
  // console.log(CompletePackagesData[0]?.title,"<-------------CompletePackagesData");

      const internationalCategory = CompletePackagesData.length > 0 ? CompletePackagesData.filter(item => item.travelcategory.includes('Domestic')) : [];

        if(internationalCategory.length === 0){
                return <p>Loading</p>
            }


  return (
    <>
    <div className='py-20 bg-gray-500/20'>
<div className='text-center my-4'>
        <h1 className='text-4xl font-bold'>Our <span className='text-[#0D3F63] '>Domestic</span> Tours</h1>
    </div>
    <div className='w-[85%] mx-auto text-center my-4'>
      <p>Syolo Travel offers an exciting range of domestic tours designed to help you explore 
        the beauty, culture, and diversity of your own country. Whether you're looking for a relaxing getaway, 
        an adventurous trek, or a cultural immersion, Syolo Travel curates personalized and hassle-free travel 
        experiences to suit your preferences.
      </p>
    </div>

         <div style={{ width: '90%', margin: '0 auto', position:"relative" }} className='my-4'>
           <Slider {...settings}>
           {internationalCategory?.map((Data, index) => {
              return (
                 <Link to={`/packagepage/${Data._id}`} key={index} className='pr-2 group'>
                  <div className='relative h-[35vh] md:h-[55vh] overflow-hidden rounded-xl'>
                    <img src={Data.image_url} alt={`Slide ${index + 1}`} className='rounded-xl transition-all duration-700 ease-in-out group-hover:scale-125' style={{width:"100%",height:"100%",objectFit:"cover",position:"relative"}}/>
                    <div className='absolute top-2 right-2 bg-white/50 px-1 rounded-md'>
                      <p className='text-sm'>{Data.duration}</p>
                    </div>
                    <div className='absolute bottom-2 left-2 bg-white/50 px-1 rounded-md text-sm'>
                      <p>{Data.destinations}</p>
                    </div>
                    <div className='absolute top-0 right-[120%] bottom-0 transition-all duration-700 ease-in-out group-hover:right-[30%] grid place-items-center'>
                      <button className='px-2 py-1 text-white bg-amber-600 rounded-2xl text-nowrap cursor-pointer'>Know More</button>
                    </div>
                  </div>
                  <div className='px-2'>
                    <div className='text-blue-600 font-bold mt-2 mb-1'>
                      <p>Title- {Data.title}</p>
                    </div>
                    <div className='mb-1'>
                      <p>Price Starts From</p>
                    </div>
                    <div className='font-semibold'>
                      <p>Rs. {Data.prices} <span className='text-xs'>per person</span></p>
                    </div>
                  </div>
                </Link>
              );
           })}
           </Slider>
      </div>
      </div>
    </>
  )
}

export default SliderUnitDomestic