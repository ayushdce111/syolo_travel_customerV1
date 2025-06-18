import React, { useEffect } from 'react';
import API from '../../apiConfig';
import axios from "axios"
import { useState } from 'react';

function AgentPackages() {
    const [AgentPackages,setAgentPackages]=useState([]);
    

    useEffect(()=>{
        try{
            const fetchAgentPackages =async ()=>{
                
                const data = await axios.get('http://localhost:5000/api/getAgentPackages');
              
        setAgentPackages(data.data)
    console.log(data.data,"<----------top data");
            } 
            fetchAgentPackages();
        }catch(error){
            console.log(error)
        }
    },[]);
    
     AgentPackages==""? <p>Loading</p> : console.log(AgentPackages,"<=-==========Agent Packages");
  return (
    <>
       {
        AgentPackages?.map((AgentPackagsdata,index)=>{
            return(
                <>
                        id- {AgentPackagsdata._id}
                        <br/>
                       title- {AgentPackagsdata.title}<br/>
                        destinations- {AgentPackagsdata.destinations}<br/>
                        duration- {AgentPackagsdata.duration}<br/>
                       description- {AgentPackagsdata.description}<br/>
                       prices-  {AgentPackagsdata.prices}<br/>
                       travelMode-  {AgentPackagsdata.travelMode}<br/>
                        inclusions - {AgentPackagsdata.inclusions}<br/>
                        availability - {AgentPackagsdata.availability}
                        <hr/>
                </>
            )
        })
       }
    </>
  )
}

export default AgentPackages;