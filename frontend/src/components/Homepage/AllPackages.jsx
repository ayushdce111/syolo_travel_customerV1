import React, { useEffect } from 'react';
import API from '../../apiConfig';
import axios from "axios"
import { useState } from 'react';

function AllPackages() {
    const [allPackages,setAllPackages]=useState([]);

    useEffect(()=>{
        try{
            const fetchAllPackages =async ()=>{
                
                const data = await axios.get('http://localhost:5000/api/getAll');
              
        setAllPackages(data.data)
    console.log(data.data,"<----------top data");
            } 
            fetchAllPackages();
        }catch(error){
            console.log(error)
        }
    },[]);
    
     allPackages==""? <p>Loading</p> : console.log(allPackages,"<=-==========allPackages");
  return (
    <>
       {
        allPackages?.map((allPackagsdata,index)=>{
            return(
                <>
                        id- {allPackagsdata._id}
                        <br/>
                       title- {allPackagsdata.title}<br/>
                        destinations- {allPackagsdata.destinations}<br/>
                        duration- {allPackagsdata.duration}<br/>
                       description- {allPackagsdata.description}<br/>
                       prices-  {allPackagsdata.prices}<br/>
                       travelMode-  {allPackagsdata.travelMode}<br/>
                        inclusions - {allPackagsdata.inclusions}<br/>
                        availability - {allPackagsdata.availability}
                        <hr/>
                </>
            )
        })
       }
    </>
  )
}

export default AllPackages