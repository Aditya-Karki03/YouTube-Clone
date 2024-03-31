import { Provider, useDispatch } from "react-redux"
import { store } from "./Store/store"
import { useState, useEffect } from "react"
import authService from "./Appwrite/auth";
import { login, logout } from "./Store/authSlice";

function App() {
  const dispatch=useDispatch()
  const[loading,setLoading]=useState(true);
  useEffect(()=>{
    authService.getCurrentUser()
    .then((user)=>{
        if(user)  dispatch(login(user))
        else dispatch(logout());
      }
    )
    .finally(()=>setLoading(false))
  },[])
  

  return (
   <>
    
    {
      loading?(<h1>Component is loading</h1>):null
    }

   </>
  )
}

export default App
