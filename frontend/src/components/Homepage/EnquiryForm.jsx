import React, { useState } from 'react';
import API from '../../axios.jsx';
import {ToastContainer} from "react-toastify";
import { handleError,handleSuccess } from '../Utils';

const EnquiryForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    travelernumber:'',
    leavingFrom:"",
    goingTo:"",
    additionalDetails: ''
  });
  const [errors, setErrors] = useState({
    name: '',
    phone: '',
    travelernumber:'',
    leavingFrom:"",
    goingTo:"",
    additionalDetails: ''
  });

  const validateName = (name) => {
    const nameRegex = /^[A-Za-z\s]{2,}$/;
    if (!nameRegex.test(name)) {
      return 'Name must be at least 2 characters and contain only letters.';
    }
    return '';
  };

  const validatePhone = (phone) => {
    const phoneRegex = /^(\d{10}|\d{3}-\d{3}-\d{4})$/;
    if (!phoneRegex.test(phone)) {
      return 'Please enter a valid phone number (e.g., 123-456-7890 or 1234567890).';
    }
    return '';
  };

  const validateadditionalDetails = (additionalDetails) => {
    if (additionalDetails.length < 10) {
      return 'Additional Details must be at least 10 characters.';
    }
    return '';
  };
  const validatetravelernumber = (travelernumber) => {
    console.log(isNaN(travelernumber),"travelernumbertravelernumber  -----",travelernumber);
    if (isNaN(travelernumber) || travelernumber < 1) {
      return 'traveler number must be at least 1.';
    }
    return '';
  };
  const validateleavingFrom = (leavingFrom) => {
    const leavingFromRegex = /^[A-Za-z\s]{2,}$/;
    if (!leavingFromRegex.test(leavingFrom)) {
      return 'Must be at least 2 characters and contain only letters.';
    }
    return '';
  };
   const validategoingTo = (goingTo) => {
    const goingToRegex = /^[A-Za-z\s]{2,}$/;
    if (!goingToRegex.test(goingTo) ) {
      return 'Must be at least 2 characters and contain only letters.';
    }
    return '';
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Validate the changed field
    if (name === 'name') {
      setErrors({ ...errors, name: validateName(value) });
    } else if (name === 'phone') {
      setErrors({ ...errors, phone: validatePhone(value) });
    } else if (name === 'additionalDetails') {
      setErrors({ ...errors, additionalDetails: validateadditionalDetails(value) });
    } else if (name === 'travelernumber') {
      setErrors({ ...errors, travelernumber: validatetravelernumber(value) });
    }else if (name === 'leavingFrom') {
      setErrors({ ...errors, leavingFrom: validateleavingFrom(value) });
    }else if (name === 'goingTo') {
      setErrors({ ...errors, goingTo: validategoingTo(value) });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const nameError = validateName(formData.name);
    const phoneError = validatePhone(formData.phone);
    const additionalDetailsError = validateadditionalDetails(formData.additionalDetails);
    const travelernumberError = validatetravelernumber(formData.travelernumber);
    const leavingFromError = validateleavingFrom(formData.leavingFrom);
    const goingToError = validategoingTo(formData.goingTo);
    

    setErrors({
      name: nameError,
      phone: phoneError,
      additionalDetails: additionalDetailsError,
      travelernumber: travelernumberError,
      leavingFrom: leavingFromError,
      goingTo: goingToError
    });

    if (!nameError && !phoneError && !additionalDetailsError && !travelernumberError && !leavingFromError && !goingToError) {
      // Simulate form submission (replace with actual backend call)
    //   alert(`Form submitted successfully!\nName: ${formData.name}\nPhone: ${formData.phone}\additionalDetails: ${formData.additionalDetails}`);
    try{
          const res = await API.post("/customer/enquirydata",formData);
          const resJson = await res.data;
          console.log(resJson,"<----------------------------responsone enquiry");
          handleSuccess(resJson.message);
          // console.log(resJson,"<----------------resposne LOCAL");
        //   const {message,success,error,msg} =resJson;
          
        //   if(success){
        //     handleSuccess(message);
        //     setTimeout(() => {
        //       navigate("/login");
        //     }, 1000);
        //   }else if(error){
        //     handleError(error?.details[0]?.message);
        //   }else if(!success){
        //     handleError(message);
        //   }
          // if(msg){
          //   handleError(msg);
          // }
          }catch(error){
            console.log(error,"<----------signup error")
            error.status===400 && handleError(error.response.data.error.details[0].message);
            error.status===500 && handleError(error.response.data.error.errorResponse.errmsg);
            
          }
      setFormData({ name: '', phone: '', additionalDetails: '',travelernumber:"", leavingFrom:"",goingTo:"" });
      setErrors({ name: '', phone: '', additionalDetails: '',travelernumber:"",leavingFrom:"",goingTo:"" });
    }
  };

  return (
    <section className=" py-12 flex flex-col md:flex-row gap-5 justify-around">
      <div className='px-2'>
        <h1 className='text-5xl text-[#0D3F63] font-bold tracking-wide'>Plan Your Trip</h1>
        <p className='text-2xl text-[#0D3F63] tracking-wide'>Submit Your Details</p>
        <img src='./images/contact_form_banner.png'/>
      </div>
      <div className="grid grid-cols-1 place-items-center px-4 sm:px-6 lg:px-8">
        {/* <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Enquiry Form</h2> */}
        <form onSubmit={handleSubmit} className="space-y-5 w-full">
          {/* Name Field */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-[#0D3F63]">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className={`mt-1 block w-full px-3 py-2 border-2 ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-0.5 focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
              placeholder="Enter your name"
            />
            {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
          </div>

          {/* Phone Number Field */}
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-[#0D3F63]">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              required
              className={`mt-1 block w-full px-3 py-2 border-2 ${errors.phone ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-0.5 focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
              placeholder="Enter your phone number"
            />
            {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
          </div>
          <div className='flex flex-col md:flex-row gap-2 justify-between'>
              <div>
                  <label htmlFor="travelernumber" className="block text-sm font-medium text-[#0D3F63]">Number Of Traveler</label>
                  <input
                    type="text"
                    id="travelernumber"
                    name="travelernumber"
                    value={formData.travelernumber}
                    onChange={handleInputChange}
                    required
                    className={`mt-1 block w-full px-3 py-2 border-2 ${errors.travelernumber ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
                    placeholder="Enter number of travelers"
                  />
                  {errors.travelernumber && <p className="mt-1 text-sm text-red-600">{errors.travelernumber}</p>}
              </div>
              <div>
                  <label htmlFor="leavingFrom" className="block text-sm font-medium text-[#0D3F63]">Leaving From</label>
                  <input
                    type="text"
                    id="leavingFrom"
                    name="leavingFrom"
                    value={formData.leavingFrom}
                    onChange={handleInputChange}
                    required
                    className={`mt-1 block w-full px-3 py-2 border-2 ${errors.leavingFrom ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
                    placeholder="Enter location leaving From"
                  />
                  {errors.leavingFrom && <p className="mt-1 text-sm text-red-600">{errors.leavingFrom}</p>}
              </div>
              <div>
                  <label htmlFor="goingTo" className="block text-sm font-medium text-[#0D3F63]">Going To</label>
                  <input
                    type="text"
                    id="goingTo"
                    name="goingTo"
                    value={formData.goingTo}
                    onChange={handleInputChange}
                    required
                    className={`mt-1 block w-full px-3 py-2 border-2 ${errors.goingTo ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
                    placeholder="Enter location leaving From"
                  />
                  {errors.goingTo && <p className="mt-1 text-sm text-red-600">{errors.goingTo}</p>}
              </div>
          </div>
{/* {console.log(errors.travelernumber,"errors.travelernumbererrors.travelernumber")} */}
          {/* additionalDetails Field */}
          <div>
            <label htmlFor="additionalDetails" className="block text-sm font-medium text-[#0D3F63]">Additional Details</label>
            <textarea
              id="additionalDetails"
              name="additionalDetails"
              rows="4"
              value={formData.additionalDetails}
              onChange={handleInputChange}
              required
              className={`mt-1 block w-full px-3 py-2 border-2 ${errors.additionalDetails ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
              placeholder="Mention Additional Details "
            ></textarea>
            {errors.additionalDetails && <p className="mt-1 text-sm text-red-600">{errors.additionalDetails}</p>}
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-[#0D3F63] hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Submit Enquiry
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default EnquiryForm;