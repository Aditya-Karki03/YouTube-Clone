import { useState } from "react";
import React from 'react'
import { ReactDOM } from "react";

 const Header=()=>{
    
    const[btnName,setBtnName]=useState('Login');
   
   return (
    <div className='header-container'>
    <img src='./logo.png' alt='Logo'/>
    <div className='links-container'>
        <ul className='links-container'>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Cart</li>
            <button onClick={()=>(btnName==='Login'?setBtnName('Log Out'):setBtnName('Login'))}>{btnName}</button>
        </ul>
    </div>
</div>
   )
 }
export default Header;