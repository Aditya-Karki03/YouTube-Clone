import { Provider } from "react-redux"
import Header from "./Components/Header"
// import Sidebar from "./Components/Sidebar"
import YtStore from "./Store/YTStore"
import ToggleSidebar from "./Components/ToggleSidebar"
// import SuggestionBtn from "./Components/SuggestionBtn"
// import VideoContainer from "./Components/VideoContainer"
import { Outlet } from "react-router-dom"




function App() {
  


  return (
    <Provider store={YtStore}>
      <div className="">
        <Header/>
        {/* <Sidebar/> */}
        <ToggleSidebar />
        {/* <SuggestionBtn/> */}
        <Outlet/>
      </div>
    </Provider>
  )
}

export default App
