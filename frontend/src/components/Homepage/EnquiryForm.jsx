import React, { useState } from 'react';
import API from '../../apiConfig';

const EnquiryForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });
  const [errors, setErrors] = useState({
    name: '',
    phone: '',
    message: ''
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

  const validateMessage = (message) => {
    if (message.length < 10) {
      return 'Message must be at least 10 characters.';
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
    } else if (name === 'message') {
      setErrors({ ...errors, message: validateMessage(value) });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const nameError = validateName(formData.name);
    const phoneError = validatePhone(formData.phone);
    const messageError = validateMessage(formData.message);

    setErrors({
      name: nameError,
      phone: phoneError,
      message: messageError
    });

    if (!nameError && !phoneError && !messageError) {
      // Simulate form submission (replace with actual backend call)
    //   alert(`Form submitted successfully!\nName: ${formData.name}\nPhone: ${formData.phone}\nMessage: ${formData.message}`);
    try{
          const res = await API.post("customer/enquirydata",formData);
          const resJson = await res.data;
          console.log(resJson,"<----------------------------responsone enquiry");
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
            
          }
      setFormData({ name: '', phone: '', message: '' });
      setErrors({ name: '', phone: '', message: '' });
    }
  };

  return (
    <section className="bg-gray-100 py-12">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Enquiry Form</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Field */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className={`mt-1 block w-full px-3 py-2 border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
              placeholder="Enter your name"
            />
            {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
          </div>

          {/* Phone Number Field */}
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              required
              className={`mt-1 block w-full px-3 py-2 border ${errors.phone ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
              placeholder="Enter your phone number"
            />
            {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
          </div>

          {/* Message Field */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleInputChange}
              required
              className={`mt-1 block w-full px-3 py-2 border ${errors.message ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
              placeholder="Enter your message"
            ></textarea>
            {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message}</p>}
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
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