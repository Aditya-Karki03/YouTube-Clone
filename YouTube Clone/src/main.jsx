import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import VideoDisplay from "./Components/VideoDisplay"
import VideoContainer from './Components/VideoContainer.jsx'
import Sidebar from './Components/Sidebar.jsx'
import SuggestionBtn from './Components/SuggestionBtn.jsx'
import SearchedPage from './Components/SearchedPage.jsx'

const appRouter=createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {
      path:'/',
      element:<><Sidebar/><SuggestionBtn/><VideoContainer/></>
    },{
      path:'/watch/:id',
      element:<VideoDisplay/>
    },{
      path:'/searchedItems/:id',
      element:<><Sidebar/><SearchedPage/></>
    }
  ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={appRouter}/>
  </React.StrictMode>,
)
