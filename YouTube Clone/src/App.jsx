import { Provider } from "react-redux"
import Header from "./Components/Header"
import YtStore from "./Store/YTStore"
import ToggleSidebar from "./Components/ToggleSidebar"
import { Outlet } from "react-router-dom"




function App() {
  

  return (
    <Provider store={YtStore}>
      <div className="">
        <Header/>
        <ToggleSidebar />
        <Outlet/>
      </div>
    </Provider>
  )
}

export default App
