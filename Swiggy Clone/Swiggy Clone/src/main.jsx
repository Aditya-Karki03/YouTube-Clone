import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import ErrorPage from './Components/ErrorPage.jsx'
import Search from './Components/Search.jsx'
import Offer from './Components/Offer.jsx'
import MainBody from './Components/MainBody.jsx'
import RestroMenu from './Components/RestroMenu.jsx'
import Cart from './Components/Cart.jsx'
import SignUpAndSignIN from './Components/SignUpAndSignIn.jsx'

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
        path:'search/',
        element:<Search/>
      },
      {
        path:'offers/',
        element:<Offer/>
      },
      {
        path:'restaurants/:restroId',
        element:<RestroMenu/>
      },
      {
        path:'cart/',
        element:<Cart/>
      },
      {
        path:'signUp/',
        element:<SignUpAndSignIN/>
      }
    ],
  },
 
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
