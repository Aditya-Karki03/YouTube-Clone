import { useState } from 'react';

import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';



export default function Cards(){

  const[message,setMessage]=useState('Hello');

  const notify = () => toast(message);

  const handleClick=()=>{
    setMessage('Hello From Aditya karki');
    notify();
  }

  return (
    <div>
      <button onClick={handleClick}>Notify !</button>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition: Bounce
      />
    </div>
  );
}