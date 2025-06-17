import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import {Routes,Route} from "react-router-dom";
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import Sidebar from './components/Sidebar';
import LoginSignup from './components/LoginSignup';
import { Link, Navigate } from 'react-router-dom';
import RefreshHandler from "./RefreshHandler";
import Homepage from './components/Homepage/Homepage';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Topheader from './components/TopHeader';
import Header from './components/Header';
import {ToastContainer} from "react-toastify";
import AllPackages from './components/Homepage/AllPackages';
// import { handleError,handleSuccess } from '../Utils';

function App() {
// const Navigate = useNavigate();
  const [isAuthenticated,setisAuthenticated]=useState(false);
  const PrivateRoute=({element})=>{
    return isAuthenticated ? element : <Navigate to="/Login" />
  }
// Sidebar
      const[showSidebar,setShowSidebar]= useState(false);

// Login

      const[showLoginSignup,setShowLoginSignup]= useState(false);

// props
      const HeaderProps= [setShowSidebar,setShowLoginSignup]
      const SidebarProps = [ setShowSidebar,showSidebar ];
      const LoginProps = [ setShowLoginSignup ];

  return (
    <>
    <RefreshHandler setisAuthenticated={setisAuthenticated}/>
    <Topheader/>
    <Header HeaderProps={HeaderProps}/>
    <Routes>
      {/* <Route path='/' element={<Homepage/>} /> */}
      <Route path='/' element={<Homepage/>} />
      <Route path='/Signup' element={<Signup/>} />
      <Route path='/Login' element={<Login/>} />
      <Route path='/Home' element={<PrivateRoute element={<Home/>}/>} />

    </Routes>
      
      {showSidebar && <Sidebar SidebarProps={SidebarProps}/> }
      {showLoginSignup && (<LoginSignup LoginProps={LoginProps}/>) }
      <ToastContainer />

    </>
  )
}

export default App
