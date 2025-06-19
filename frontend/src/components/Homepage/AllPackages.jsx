import React from 'react'
import { useState } from 'react'
import AdminPackages from './AdminPackages';
import AgentPackages from './AgentPackages';
import { useEffect } from 'react';

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
        completePackages.length !== 0 && completePackages
            .filter(item => item.travelcategory.includes('International'))  
            .map((item, index) => (
                <p key={index}>{item.title} - {item.travelcategory}</p>           
            ))

    }
        <AdminPackages setAdminPackagescopy={setAdminPackagescopy}/>
        <AgentPackages setAgentPackagescopy={setAgentPackagescopy}/>
    </>
  )
}

export default AllPackages