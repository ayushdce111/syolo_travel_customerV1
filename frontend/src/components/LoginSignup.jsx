import React,{useState} from 'react';
import Login from "./Login";
import Signup from './Signup';




const LoginSignup = ({LoginProps}) => {
    const [setShowLoginSignup]=LoginProps;
  return (
    <>
         <div className='absolute top-0 right-0 left-0 bottom-0 bg-gray-300/50 transition-all flex justify-center items-center' onClick={()=>{setShowLoginSignup(false)}}>
            <div className='w-[92vw] md:w-[30vw] h-[60vh] rounded-lg shadow-lg bg-white flex items-center relative overflow-hidden' onClick={(event)=>{event.stopPropagation()}}>
                <Login setShowLoginSignup={setShowLoginSignup}/> 
            </div>
        </div>
    </>
  )
}

export default LoginSignup