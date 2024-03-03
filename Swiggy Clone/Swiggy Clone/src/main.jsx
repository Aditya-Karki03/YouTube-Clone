import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import ErrorPage from './Components/ErrorPage.jsx'
import Search from './Components/Search.jsx'
import Offer from './Components/Offer.jsx'
import MainBody from './Components/MainBody.jsx'

const router=createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    errorElement:<ErrorPage/>,
    children:[
      {
        path:'',
        element:<MainBody/>
      },
      {
        path:'search/:searcId',
        element:<Search/>
      },
      {
        path:'offers/:offer',
        element:<Offer/>
      }
    ],
  },
 
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
