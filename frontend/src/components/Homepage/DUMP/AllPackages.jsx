import React from 'react'
import { useState, useEffect } from 'react'
import AdminPackages from './AdminPackages.jsx';
import AgentPackages from './AgentPackages.jsx';
import SliderUnit from "./SliderUnit.jsx"

function AllPackages() {
    const [adminPackagescopy,setAdminPackagescopy] = useState([]);
    const [agentPackagescopy, setAgentPackagescopy] = useState([]);
    const [completePackages,setCompletePackages] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        const combinedPackages = [...adminPackagescopy, ...agentPackagescopy];
        setCompletePackages(combinedPackages);
        combinedPackages.length === 0 && setLoading(false);
    },[adminPackagescopy,agentPackagescopy]);

    const internationalCategory = completePackages.length > 0 ? completePackages.filter(item => item.travelcategory.includes('International')) : [];

    if (loading) {
        return <p>Loading...</p>;
    }
      
    return (
        <>
        {console.log("checkpoint", completePackages)}
        {
            completePackages.length !== 0 && (
                <SliderUnit items={internationalCategory} />
            )
        }
        <AdminPackages setAdminPackagescopy={setAdminPackagescopy}/>
        <AgentPackages setAgentPackagescopy={setAgentPackagescopy}/>
        </>
    )
}

export default AllPackages
