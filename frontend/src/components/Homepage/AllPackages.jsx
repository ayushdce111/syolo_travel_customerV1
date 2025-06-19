import React from 'react'
import { useState } from 'react'
import AdminPackages from './Packages/AdminPackages.jsx';
import AgentPackages from './Packages/AgentPackages.jsx';
import { useEffect } from 'react';
import SliderUnit from "./Packages/SliderUnit.jsx"

function AllPackages() {
    const [adminPackagescopy,setAdminPackagescopy] = useState([]);
    const [agentPackagescopy, setAgentPackagescopy] = useState([]);
    const [completePackages,setCompletePackages] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(()=>{
        setCompletePackages([...completePackages, ...adminPackagescopy, ...agentPackagescopy]);
        console.log(completePackages.length,"<==========completePackages.length")
        completePackages.length===0 && setLoading(true);

    },[adminPackagescopy,agentPackagescopy]);

 
    console.log(completePackages.length,"completePackages.length")
    
    // if (loading) {
    //         return <p>Loading...</p>;
    // }
      
  return (
    <>
    {console.log("checkpoint", completePackages)}
    {
        completePackages.length !== 0 && (
            <>
            {const allPackages = completePackages.filter((item) => item.travelcategory.includes('International'))}
                <SliderUnit item={item}/>  
                </>      
            )
        

    }
        <AdminPackages setAdminPackagescopy={setAdminPackagescopy}/>
        <AgentPackages setAgentPackagescopy={setAgentPackagescopy}/>
    </>
  )
}

export default AllPackages