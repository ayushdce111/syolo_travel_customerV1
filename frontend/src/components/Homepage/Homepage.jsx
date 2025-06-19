import React from 'react'
import AdminPackages from './AdminPackages'
import Banner from './Banner'
import EnquiryForm from "./EnquiryForm";
import AgentPackages from "./AgentPackages";
import AllPackages from './AllPackages';

const Homepage = () => {
  return (
    <>

        <Banner/>
        {/* <AdminPackages/> */}
        <EnquiryForm/>
        {/* <AgentPackages/> */}
        <AllPackages/>
        
    </>
  )
}

export default Homepage