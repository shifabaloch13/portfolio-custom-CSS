import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaVimeoV } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer style={{ 
      backgroundColor: '#333', 
      color: '#ccc', 
      textAlign: 'center', 
      padding: '20px 0', 
      fontSize: '14px', 
      fontFamily: 'Arial, sans-serif',
    }}>
      <p style={{ margin: '0' }}>
        Copyright © 2024 All rights reserved | This template is made with{' '}
        <span style={{ color: '#ff4081' }}>❤️</span> by{' '}
        <a href="https://colorlib.com" style={{ color: '#cddc39', textDecoration: 'none' }}>Colorlib</a>
      </p>
      <div style={{ 
        marginTop: '10px', 
        display: 'flex', 
        justifyContent: 'center', 
        gap: '15px' 
      }}>
        <a href="#" style={{ color: '#ccc', fontSize: '20px' }}><FaFacebookF /></a>
        <a href="#" style={{ color: '#ccc', fontSize: '20px' }}><FaTwitter /></a>
        <a href="#" style={{ color: '#ccc', fontSize: '20px' }}><FaInstagram /></a>
        <a href="#" style={{ color: '#ccc', fontSize: '20px' }}><FaLinkedinIn /></a>
        <a href="#" style={{ color: '#ccc', fontSize: '20px' }}><FaVimeoV /></a>
      </div>
    </footer>
  );
};

export default Footer;