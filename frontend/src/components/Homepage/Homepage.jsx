import React from 'react'
// import AdminPackages from './Packages/AdminPackages.jsx'
import Banner from './Banner'
import EnquiryForm from "./EnquiryForm";
// import AgentPackages from "./Packages/AgentPackages.jsx";
// import AllPackages from './AllPackages.jsx';
// import SliderUnit from "./Packages/SliderUnit.jsx";
// import PackagesHome from './PackagesUnit/PackagesHome.jsx';
import SliderUnitInternational from "./SliderUnitInternational"
import SliderUnitDomestic from "./SliderUnitDomestic";
import WhyChoose from "./WhyChoose.jsx"

SliderUnitDomestic

const Homepage = () => {
  return (
    <>
    {/* <AllPackages/> */}
{/* <SliderUnit/> */}
<SliderUnitInternational/>
<SliderUnitDomestic/>
        <Banner/>
        {/* <AdminPackages/> */}
        <EnquiryForm/>
        {/* <AgentPackages/> */}
        <WhyChoose/>
        
        
        
    </>
  )
}

export default Homepage