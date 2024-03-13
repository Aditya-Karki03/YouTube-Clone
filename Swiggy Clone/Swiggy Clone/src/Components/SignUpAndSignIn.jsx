import { MdOutlineCancel } from "react-icons/md";
import { useState } from "react";
import emailAndPasswordFormatValidation from "../Utils/emailAndPasswordValidation";

export default function SignUpAndSignIN(props){
    const{defaultPosition=null}=props;
    const[position,setPosition]=useState('');
    const[login,setLogin]=useState(true);
    const[phoneNo,setPhoneNo]=useState('')
    const[name,setName]=useState('');
    const[email,setEmail]=useState('');
   

    
   function handleCross(){
    setPosition('right-full')
   }

   function toggleLogin(){
    setLogin(!login)
   }

   const  handleVerification=(e)=>{
        e.preventDefault();
        if(login)   emailAndPasswordFormatValidation(phoneNo,name,email)
        emailAndPasswordFormatValidation(phoneNo,name,email)
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
                        handleVerification && <p>{handleVerification}</p>
                    }
                    <input type="number" onChange={(e)=>{setPhoneNo(e.target.value)}} className="[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none border border-[lightgray] h-[40px] p-4 outline-none" placeholder="Phone number"  />
                    {
                        !login &&
                        <>
                            <input onChange={(e)=>{setName(e.target.value)}} type="text" placeholder="Name" className="border border-[lightgray] h-[40px] p-4 outline-none" />
                            <input onChange={(e)=>{setEmail(e.target.value)}} type="text" placeholder="Email" className="border border-[lightgray] h-[40px] p-4 outline-none" />
                            <p className="my-[10px] cursor-pointer text-[#6fd3f4]">Have a referral code?</p>
                        </>
                    }
                    <button onSubmit={(e)=>e.preventDefault()} onClick={(e)=>handleVerification(e)} className="bg-OnHoverColor text-[white] h-[40px] font-bold">LOGIN</button>
                    <p>By clicking on Login, I accept the <span className="hover:cursor-pointer">Terms & Conditions & Privacy Policy</span></p>
                </form>
            </div>
           </div>
        </div>
    )
}