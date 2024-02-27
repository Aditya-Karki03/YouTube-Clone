import { useState } from "react";
import React from 'react'
import { Link } from "react-router-dom";
 const Header=()=>{
    
    const[btnName,setBtnName]=useState('Login');
   
   return (
    <div className='header-container'>
    <img src='./logo.png' alt='Logo'/>
    <div className='links-container'>
        <ul className='links-container'>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About Us</Link></li>
            <li><Link to='/contact'>Contact</Link></li>
            <li><Link to='/cart'>Cart</Link></li>
            <button onClick={()=>(btnName==='Login'?setBtnName('Log Out'):setBtnName('Login'))}>{btnName}</button>
        </ul>
    </div>
</div>
   )
 }
export default Header;