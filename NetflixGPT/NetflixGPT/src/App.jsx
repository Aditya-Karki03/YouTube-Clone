import { createBrowserRouter } from "react-router-dom";
// import Body from "./Components/Body";
import store from "./Utils/AppStore";
import { Provider } from "react-redux";
import Login from "./Components/Login";
import Browse from "./Components/Browse";

import { RouterProvider } from "react-router-dom";
import ViewTrailer from "./Components/ViewTrailer";
import TrailerError from "./Components/TrailerError";



function App() {
 
  const AppRouter=createBrowserRouter([
    {
      path:'/',
      element:<Login/>
    },
    {
      path:'/browse',
      element:<Browse/>,
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
        {/* <Body/> */}
        <RouterProvider router={AppRouter} />
      </div>
    </Provider>
  )
}

export default App
