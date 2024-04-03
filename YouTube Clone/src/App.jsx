import { Provider } from "react-redux"
import Header from "./Components/Header"
import Sidebar from "./Components/Sidebar"
import YtStore from "./Store/YTStore"
import ToggleSidebar from "./Components/ToggleSidebar"



function App() {
  


  return (
    <Provider store={YtStore}>
      <div className="">
        <Header/>
        <Sidebar/>
        <ToggleSidebar />
      </div>
    </Provider>
  )
}

export default App
