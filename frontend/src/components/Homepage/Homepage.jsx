import React from 'react'
import AllPackages from './AllPackages'
import Banner from './Banner'
import EnquiryForm from "./EnquiryForm";

const Homepage = () => {
  return (
    <>
<EnquiryForm/>
        <Banner/>
        <AllPackages/>
        
    </>
  )
}

export default Homepage