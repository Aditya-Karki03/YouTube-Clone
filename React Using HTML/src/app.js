import React from 'react';
import ReactDOM  from 'react';
import { createRoot } from 'react-dom/client';
import Header from './Components/Header.js'
import Body from './Components/Body.js'
import  '../style.css';

const container=document.getElementById('root');
const root=createRoot(container);



// console.log(restruants)




//Body contains numerous Restaurant cards
 

const AppLayOut=()=>(
    <div className='main-container'>
        <Header/>
        <Body/>
    </div>
)

root.render(<AppLayOut/>)
