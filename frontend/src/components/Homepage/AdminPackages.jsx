import React, { useEffect } from 'react';
import API from '../../apiConfig';
import axios from "axios"
import { useState } from 'react';

function AdminPackages() {
    const [AdminPackages,setAdminPackages]=useState([]);

    useEffect(()=>{
        try{
            const fetchAdminPackages =async ()=>{
                
                const data = await axios.get('http://localhost:5000/api/getAdminPackages');
              
        setAdminPackages(data.data)
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
       {
        AdminPackages?.map((AdminPackagsdata,index)=>{
            return(
                <>
                        id- {AdminPackagsdata._id}
                        <br/>
                       title- {AdminPackagsdata.title}<br/>
                        destinations- {AdminPackagsdata.destinations}<br/>
                        duration- {AdminPackagsdata.duration}<br/>
                       description- {AdminPackagsdata.description}<br/>
                       prices-  {AdminPackagsdata.prices}<br/>
                       travelMode-  {AdminPackagsdata.travelMode}<br/>
                        inclusions - {AdminPackagsdata.inclusions}<br/>
                        availability - {AdminPackagsdata.availability}
                        <hr/>
                </>
            )
        })
       }
    </>
  )
}

export default AdminPackages