import React, { Suspense } from "react";

import { createBrowserRouter } from "react-router-dom";
// import Body from "./Components/Body";
import store from "./Utils/AppStore";
import { Provider } from "react-redux";
import Login from "./Components/Login";
// import Browse from "./Components/Browse";
const Browse=React.lazy(()=>import("./Components/Browse"));

import { RouterProvider } from "react-router-dom";
import ViewTrailer from "./Components/ViewTrailer";
import TrailerError from "./Components/TrailerError";
import ShimmerUIforVideo from "./Components/ShimmerUIforVideo";



function App() {
 
  const AppRouter=createBrowserRouter([
    {
      path:'/',
      element:<Login/>
    },
    {
      path:'/browse',
      element:<Suspense fallback={<ShimmerUIforVideo/>}>
        <Browse/>
      </Suspense>
    },
    {
      path:'/viewTrailer/:id',
      element:<ViewTrailer/>,
      errorElement:<TrailerError/>
    }
  ])

  return (
    <Provider store={store}>
      <div>
        <RouterProvider router={AppRouter} />
      </div>
    </Provider>
  )
}

export default App
