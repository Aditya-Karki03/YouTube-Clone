import Body from "./Components/Body";
import store from "./Utils/AppStore";
import { Provider } from "react-redux";




function App() {
 

  return (
    <Provider store={store}>
      <div>
        <Body/>
      </div>
    </Provider>
  )
}

export default App
