import React from 'react';
import ReactDOM  from 'react';
import {createBrowserRouter,Outlet,Router,RouterProvider} from 'react-router-dom'
import { createRoot } from 'react-dom/client';
import Header from './Components/Header.js'
import Body from './Components/Body.js'
import About from './Components/About.js';
import Contact from './Components/Contact.js';
import RestroDetails from './Components/RestroDetails.js';
import Error from './Components/Error.js';
import  '../style.css';

const container=document.getElementById('root');
const root=createRoot(container);




//Body contains numerous Restaurant cards
 

const AppLayOut=()=>(
    <div className='main-container'>
        <Header/>
        <Outlet/>
    </div>
)
const appRoute=createBrowserRouter([
    {
        path:'/',
        element:<AppLayOut/>,
       
        children:[
            {
                path:'/',
                element:<Body/>
            },
            {
                path:'/about',
                element:<About/>
            },
            {
                path:'/contact',
                element:<Contact/>
            },
            {
                path:'/restroDetail',
                element:<RestroDetails/>
            }
        ]
        
    }
])
root.render(<RouterProvider router={appRoute}/>)
