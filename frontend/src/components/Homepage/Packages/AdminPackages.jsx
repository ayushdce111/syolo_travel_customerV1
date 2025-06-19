import React, { useEffect } from 'react';
import API from '../../../apiConfig';
import axios from "axios"
import { useState } from 'react';

function AdminPackages({setAdminPackagescopy}) {
    // console.log(setAdminPackagescopy,"setAdminPackagescopy")
    const [AdminPackages,setAdminPackages]=useState([]);

    useEffect(()=>{
        try{
            const fetchAdminPackages =async ()=>{
                
                const data = await axios.get('http://localhost:5000/api/getAdminPackages');
              
        setAdminPackages(data.data);
        setAdminPackagescopy(data.data);
        
    // console.log(data.data,"<----------top data");
            } 
            fetchAdminPackages();
        }catch(error){
            console.log(error)
        }
    },[]);
    
     AdminPackages==""? <p>Loading</p> : console.log(AdminPackages,"<=-==========Admin Packages");
  return (
    <>
    <div className='grid grid-cols-1 md:grid-cols-4 gap-2 '>
       {
        AdminPackages?.slice(0, 4).map((AdminPackagsdata,index)=>{
            return(
                <>
                <div className=' p-3'>
                    <div className='h-[50vh] relative  border shadow-lg rounded-sm'>
                        <img src='#' className='w-full h-full rounded-sm'/>
                        <div className='absolute top-1 right-1 p-1 rounded-sm bg-amber-400'>
                            duration- {AdminPackagsdata.duration}
                        </div>
                        <div className='absolute bottom-1 left-1 p-1 rounded-sm bg-amber-500'>
                            destinations- {AdminPackagsdata.destinations}<br/>
                        </div>
                    </div>
<div className=' pt-2'>
                        {/* id- {AdminPackagsdata._id} */}
                       <div className=''>
                       title- {AdminPackagsdata.title}
                       </div>
                       <div className=''>
                        price Starts from -  
                        </div>
                        <div className=' text-right'>
                            Rs. {AdminPackagsdata.prices}
                        </div>
                        {AdminPackagsdata.travelcategory}
                        </div>
                    
                       {/* description- {AdminPackagsdata.description}<br/>
                       
                       travelMode-  {AdminPackagsdata.travelMode}<br/>
                        inclusions - {AdminPackagsdata.inclusions}<br/>
                        availability - {AdminPackagsdata.availability}
                        <hr/> */}
                        </div>
                        
                </>
            )
        })
       }
       </div>
       <div className='text-center pt-6'>
        <button className='bg-amber-700 p-2 rounded text-white hover:bg-blue-500'>See More</button>
       </div>
    </>
  )
}

export default AdminPackages