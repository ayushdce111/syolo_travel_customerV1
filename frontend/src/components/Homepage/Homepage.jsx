import React from 'react'
import AdminPackages from './Packages/AdminPackages.jsx'
import Banner from './Banner'
import EnquiryForm from "./EnquiryForm";
import AgentPackages from "./Packages/AgentPackages.jsx";
import AllPackages from './AllPackages.jsx';
import SliderUnit from "./Packages/SliderUnit.jsx";

const Homepage = () => {
  return (
    <>
<SliderUnit/>
        <Banner/>
        {/* <AdminPackages/> */}
        <EnquiryForm/>
        {/* <AgentPackages/> */}
        <AllPackages/>
        
    </>
  )
}

export default Homepage