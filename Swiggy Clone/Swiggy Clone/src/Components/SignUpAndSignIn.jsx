import { MdOutlineCancel } from "react-icons/md";
import { useState,useRef } from "react";
import emailAndPasswordFormatValidation from "../Utils/emailAndPasswordValidation";
import { getAuth, createUserWithEmailAndPassword} from "firebase/auth";
// import { app } from "../Utils/firebaseConfig";


export default function SignUpAndSignIN(props){
    const{defaultPosition=null}=props;
    const[position,setPosition]=useState('');
    const[login,setLogin]=useState(true);
    // const[phoneNo,setPhoneNo]=useState(null)
    // const[name,setName]=useState(null);
    // const[email,setEmail]=useState(null);
    const[message,setMessage]=useState(null);
    
    const name=useRef(null);
    const email=useRef(null);
    const phoneNo=useRef(null);
    const password=useRef(null);
    
   function handleCross(){
    setPosition('right-full')
   }

   function toggleLogin(){
    setLogin(!login)
   }

   const  handleVerification=(e)=>{
        e.preventDefault();
        if(login) setMessage(emailAndPasswordFormatValidation(phoneNo)) 
        else if(!login) setMessage(emailAndPasswordFormatValidation(phoneNo.current.value,name.current.value,email.current.value));

        if(message) return;

        

       if(!login){
        // console.log(password);
        const auth = getAuth();
        createUserWithEmailAndPassword(auth,email.current.value,password.current.value,phoneNo.current.value)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            console.log(user)
          
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setMessage(errorCode + errorMessage);
            // ..
        });

        

       }
        
   }

 

    return(
        <div className=" bg-[white]  w-screen h-screen border overflow-hidden  ">
            


            <div className={` z-[100] shadow-2xl bg-[white] ml-auto w-[700px]  h-screen px-10 relative ${defaultPosition||position}  top-0 `}>
            <div>
                <MdOutlineCancel className="my-[30px] text-[20px]" onClick={handleCross} />
                <h1 className="text-[30px] font-semibold ">{login?'Login':'Sign up'}</h1>
                <p>or <span onClick={toggleLogin} className="text-OnHoverColor cursor-pointer">{login?'create an account':'login to your account'}</span></p>
                <hr className="w-[50px] my-[20px] "/>
                <form className="flex flex-col gap-3 w-[400px]">
                    {
                        message && <p className="text-[red]">{message}</p>
                    }

                    <input ref={phoneNo} type="number" autoComplete="phoneNo" className="[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none border border-[lightgray] h-[40px] p-4 outline-none" placeholder="Phone number"  />
                    {
                        !login &&
                        <>
                            <input ref={name}  type="text" placeholder="Name" autoComplete="name" className="border border-[lightgray] h-[40px] p-4 outline-none" />
                            <input ref={email}  type="text" placeholder="Email" autoComplete="email" className="border border-[lightgray] h-[40px] p-4 outline-none" />
                            <input ref={password}  type="password" placeholder="Password" autoComplete="current-password" className="border border-[lightgray] h-[40px] p-4 outline-none" />
                            <p className="my-[10px] cursor-pointer text-[#6fd3f4]">Have a referral code?</p>
                        </>
                    }
                    <button  onClick={(e)=>handleVerification(e)} className="bg-OnHoverColor text-[white] h-[40px] font-bold">{login?'LOGIN':'SIGNUP'}</button>
                    <p>By clicking on Login, I accept the <span className="hover:cursor-pointer">Terms & Conditions & Privacy Policy</span></p>
                </form>
            </div>
           </div>
        </div>
    )
}