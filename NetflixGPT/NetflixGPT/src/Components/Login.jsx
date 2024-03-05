import { NetflixLogo } from "../Utils/constants";
import { useRef, useState } from "react";
import { validation } from "../Utils/validation";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// import { app } from "../Utils/firebase";

export default function Login(){

    const[signIn,setSignIn]=useState(true);
    const[message,setMessage]=useState(null);
    const email=useRef(null);
    const password=useRef(null);
    const name=useRef(null)
   

    const handleSignUpAndSignIn=()=>{
        setSignIn(!signIn)
    }

    const handleSignInOrSignOutButton=(IsItSignInOrIsItSignOut,e)=>{
        e.preventDefault();
        //Logic for whether the format of email password and the name is correct or not    
        if (IsItSignInOrIsItSignOut){
            setMessage(validation(email.current.value,password.current.value));
        }
        else if (!IsItSignInOrIsItSignOut){
            setMessage(validation(email.current.value,password.current.value,name.current.value));
        }
        //If any error message is present, then the code won't execute further
        if(message) return

        //Logic for registering a user in the firebase
        
        if(!IsItSignInOrIsItSignOut){
            
            const auth = getAuth();
            //below we've send the current email password and name values
            createUserWithEmailAndPassword(auth, email.current.value,password.current.value,name.current.value)
              .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                console.log(user);
                // ...
              })
              .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setMessage(errorCode-errorMessage)
                // ..
              });
        }
       
    }

    return(
        <div className='h-screen w-screen'>
            <div className="shadow-[inset_0px_17px_24px_17px_rgba(25,24,24,1)] w-screen h-screen bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/93da5c27-be66-427c-8b72-5cb39d275279/94eb5ad7-10d8-4cca-bf45-ac52e0a052c0/IN-en-20240226-popsignuptwoweeks-perspective_alpha_website_medium.jpg')] bg-cover bg-center ">
                <img src={NetflixLogo} alt="Netflix logo" className="w-[150px] absolute " />
                <div className="flex flex-col rounded-lg relative top-[50%] left-[50%] bg-[black] w-[450px] h-[560px] translate-x-[-50%] translate-y-[-50%] bg-opacity-80">
                    <form className="flex flex-col text-[white] px-10 pt-20 gap-3">
                        <label className="font-semibold text-[30px]">{signIn?'Sign In':'Sign Up'}</label>
                        {message!==null&&(<div className="bg-[#fa7822] h-[60px] rounded-md flex items-center px-4 text-[white]"><p>{message}</p></div>)}
                        <input ref={email} type="text" placeholder='Email or phone number' autoComplete="email" className="h-[40px] outline-none mt-5 px-4 bg-[#474747e1]" />
                        {!signIn && <input ref={name} type="text" placeholder='Full Name' className="h-[40px] outline-none mt-1 px-4 bg-[#474747e1]" />}
                        <input ref={password} type="password" placeholder='Password' autoComplete="current-password" className="h-[40px] outline-none mt-1 px-4 bg-[#474747e1]"/>
                        <button  onSubmit={(e)=>e.preventDefault()} onClick={(e)=>{handleSignInOrSignOutButton(signIn,e)}} className="mt-7 bg-red-500 h-[40px] rounded-md font-medium hover:bg-red-600">{signIn?'Sign In':'Sign Up'}</button>
                    </form>
                    <div className="px-10 flex justify-between text-[lightgray] mt-4">
                        <p>{signIn?'New to Netflix?':'Already registered'} <span className="text-[white] cursor-pointer font-medium" onClick={handleSignUpAndSignIn}>{signIn?'Sign up now':'Sign In'}</span> </p>
                    </div>
                </div>
            </div>
            
        </div>
    )
}