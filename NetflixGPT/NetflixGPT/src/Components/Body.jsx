import Login from "./Login";
import Browse from "./Browse";
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import { useDispatch } from "react-redux";
import { addUsers,removeUsers } from "../Utils/userSlice";

import { getAuth,onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";

export default function Body(){
    const dispatch=useDispatch();
    
    useEffect(()=>{
        const auth = getAuth();
            onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/auth.user
                const {uid,email,displayName} = user;
                
                dispatch(addUsers({userId:uid,emailId:email,name:displayName}))
                
                // ...
            } else {
                dispatch(removeUsers());
                // navigate('/');
                // User is signed out
                // ...
            }
            });
    },[])

    const appRouter=createBrowserRouter([
        {
            path:'/',
            element:<Login/>
        },
        {
            path:'/browse',
            element:<Browse/>
        }
    ])


    return(
        <div>
            <RouterProvider router={appRouter} />
        </div>
    )
}