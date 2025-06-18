import React from 'react'
import AdminPackages from './AdminPackages'
import Banner from './Banner'
import EnquiryForm from "./EnquiryForm";
import AgentPackages from "./AgentPackages";

const Homepage = () => {
  return (
    <>

        <Banner/>
        <AdminPackages/>
        <EnquiryForm/>
        <AgentPackages/>
        
    </>
  )
}

export default Homepage