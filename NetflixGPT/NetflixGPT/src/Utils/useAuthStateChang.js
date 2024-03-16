

import { getAuth,onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";

export default function useAuthStateChange(){

    
    useEffect(()=>{
        const auth = getAuth();
            onAuthStateChanged(auth, (user) => {
            if (user) {
                return true;
               
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/auth.user


                // const {uid,email,displayName} = user;
                
                // dispatch(addUsers({userId:uid,emailId:email,name:displayName}))
                
                // ...
            } else {
                
                return false;
                // navigate('/');
                // User is signed out
                // ...
            }
            });
    },[])
}

