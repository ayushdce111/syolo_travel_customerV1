import React from 'react';
import { BsBorderBottom, BsBorderTop } from 'react-icons/bs';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  const footerStyle = {
    // backgroundColor: '#00809d8c',
    // backgroundImage:url('./images/logo.png'),
    // borderTop:"2px solid #0D3F63",
    color: '#ecf0f1',
    padding: '40px 20px 20px 20px',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    textAlign: 'left',
  };

  const columnStyle = {
    flex: '1',
    minWidth: '200px',
    margin: '10px',
  };

  const titleStyle = {
    fontSize: '18px',
    fontWeight: 'bold',
    color:"#0D3F63"

  };

  const linkStyle = {
    color: '#0D3F63',
    textDecoration: 'none',
    display: 'block',
    marginBottom: '8px',
    fontSize: '14px',
  };

  const logoStyle = {
    width: '120px',
    // margin:"auto"
    // marginBottom: '15px',
  };

  const iconContainerStyle = {
    display: 'flex',
    gap: '12px',
    marginTop: '10px',
  };

  const iconStyle = {
    color: '#0D3F63',
    fontSize: '18px',
    cursor: 'pointer',
    transition: 'color 0.3s',
  };

  const copyrightStyle = {
    textAlign: 'center',
    // marginTop: '30px',
    fontSize: '14px',
    color: '#ddd',
    width: '100%',
    backgroundColor:"#0D3F63",
    borderTop: "1px solid #FCECDD",
    padding:"1rem 0"
  };

  return (
    <footer>
      <div style={footerStyle} className='bg-gray-500/20'>
        {/* Column 1: Logo and Company Info */}
        <div style={columnStyle} className=''>
          <img
            src="./images/logo.png"
            alt="Company Logo"
            style={logoStyle}
            className=''
          />
          
        </div>

        {/* Column 2: About Us */}
        <div style={columnStyle}>
          <div style={titleStyle}>About Us</div>
          <hr style={{borderBottom:"2px solid #0D3F63",width:"50%",marginBottom:"1rem"}}/>
          <a href="#" style={linkStyle}>Menu 1</a>
          <a href="#" style={linkStyle}>Menu 2</a>
          <a href="#" style={linkStyle}>Menu 3</a>
        </div>

        {/* Column 3: Support */}
        <div style={columnStyle}>
          <div style={titleStyle}>Support</div>
          <hr style={{borderBottom:"2px solid #0D3F63",width:"50%",marginBottom:"1rem"}}/>
          <a href="#" style={linkStyle}>Contact</a>
          <a href="#" style={linkStyle}>FAQs</a>
          <a href="#" style={linkStyle}>Help Center</a>
        </div>

        {/* Column 4: Social Links */}
        <div style={columnStyle}>
          <div style={titleStyle}>Follow Us</div>
          <hr style={{borderBottom:"2px solid #0D3F63",width:"50%",marginBottom:"1rem"}}/>
          <div style={iconContainerStyle}>
            <a href="#" style={iconStyle}><FaFacebookF /></a>
            <a href="#" style={iconStyle}><FaTwitter /></a>
            <a href="#" style={iconStyle}><FaInstagram /></a>
          </div>
          <div className='py-2 text-[#0D3F63]'>
            Email: contact@wanderly.com
          </div>
          <div className='text-[#0D3F63]'>
            +91 9393939393
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div style={copyrightStyle}>
        © {new Date().getFullYear()} Syolo Travel Co. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
