import { TiHome } from "react-icons/ti";
import { SiYoutubeshorts } from "react-icons/si";
import { MdSubscriptions } from "react-icons/md";
import { IoCopyOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

export default function Sidebar(){
    return(
        <div className=" w-20  z-0 fixed flex flex-col items-center gap-4 pt-6 h-screen ">
            <Link to='/'>
                <div className="h-16   w-16 flex flex-col justify-around items-center rounded-lg py-2 cursor-pointer hover:bg-[lightgray] transition-all">
                    <TiHome className="text-[25px]" />
                    <span className="text-[10px]">Home</span>
                </div>
            </Link>
            <div className="h-16   w-16 flex flex-col justify-around items-center rounded-lg py-2 cursor-pointer hover:bg-[lightgray] transition-all">
                <SiYoutubeshorts className="text-[25px]" />
                <span className="text-[10px]">Shorts</span>
            </div>
            <div className="h-16   w-16 flex flex-col justify-around items-center rounded-lg py-2 cursor-pointer hover:bg-[lightgray] transition-all">
                <MdSubscriptions className="text-[25px]" />
                <span className="text-[10px]">Subscription</span>
            </div>
            <div className="h-16   w-16 flex flex-col justify-around items-center rounded-lg py-2 cursor-pointer hover:bg-[lightgray] transition-all">
                <IoCopyOutline className="text-[25px]" />
                <span className="text-[10px]">You</span>
            </div>
        </div>
    )
}