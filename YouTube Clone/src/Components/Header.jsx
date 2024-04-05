import { RxHamburgerMenu } from "react-icons/rx";
import { FaYoutube } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
import { AiFillAudio } from "react-icons/ai";
import { MdOutlineVideoCall } from "react-icons/md";
import { IoMdNotifications } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { showSidebar } from "../Store/SidebarSlice";



export default function Header(){
    const dispatch=useDispatch();

    const handleSidebarClick=()=>{
        dispatch(showSidebar())
    }

    return(
        <div className="w-screen bg-white z-10 h-16 flex fixed top-0 left-0 justify-between items-center px-5   ">
            <div className="flex gap-1 items-center">
                <div onClick={handleSidebarClick} className="mr-3 rounded-full  h-[40px] w-[40px] hover:bg-[lightgray] flex justify-center items-center cursor-pointer transition-all">
                    <RxHamburgerMenu className="text-[25px]  " />
                </div>
                <div className="flex items-center gap-4">
                    <FaYoutube className="text-red-500 text-[30px]" /><span className="font-semibold scale-150 tracking-tighter ">YouTube</span>
                </div>
            </div>
            <div className="flex justify-around items-center  w-1/2 h-[35px]">
                <div className="w-10/12 h-full flex">
                    <input type="text" placeholder="Search" className=" pl-4 outline-none border  bg-[lightgray] rounded-l-full w-11/12 h-full" />
                    <button className="px-3 hover:bg-[lightgray] group  h-[35px] bg-[lightgray] rounded-r-full transition-all"><IoSearchOutline  className="text-[20px] text-white group-hover:text-black" /></button>
                </div>
                <button className="w-[40px] h-[40px] rounded-full flex justify-center items-center hover:bg-[lightgray] transition-all"><AiFillAudio className="text-[25px]" /></button>
            </div>
            <div className="flex gap-4 h-[40px] items-center">
                <div className="h-full w-[40px] rounded-full hover:bg-[lightgray] cursor-pointer transition-all flex justify-center items-center text-[25px]"><MdOutlineVideoCall   /></div>
                <div className="h-full w-[40px] rounded-full hover:bg-[lightgray] cursor-pointer transition-all flex justify-center items-center text-[25px]"><IoMdNotifications  /></div>
                <div className="h-full w-[40px] rounded-full hover:bg-[lightgray] cursor-pointer transition-all flex justify-center items-center text-[25px]" ><FaUser  /></div>
            </div>
        </div>
    )
}