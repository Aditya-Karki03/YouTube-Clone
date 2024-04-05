import { TiHome } from "react-icons/ti";
import { SiYoutubeshorts } from "react-icons/si";
import { MdSubscriptions } from "react-icons/md";
import { IoCopyOutline } from "react-icons/io5";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function ToggleSidebar(){
    const sidebarStatus=useSelector((store)=>store.sidebarToggle.isMenuOpen);

    return(
        <div className={` bg-white mt-16 w-52 z-20 fixed top-0 duration-300 ${sidebarStatus ? 'left-0 ':'-left-52'} flex flex-col items-center gap-4 pt-6 h-screen`}>
            <Link to='/' className="h-16 pl-4 w-11/12  flex gap-3 items-center rounded-lg py-2 cursor-pointer hover:bg-[lightgray] transition-all">
                <div className="flex gap-3 items-center">
                    <TiHome className="text-[25px]" />
                    <span className="text-[15px]">Home</span>
                </div>
            </Link>
            <div className="h-16 pl-4 w-11/12  flex gap-3 items-center rounded-lg py-2 cursor-pointer hover:bg-[lightgray] transition-all">
                <SiYoutubeshorts className="text-[25px]" />
                <span className="text-[15px]">Shorts</span>
            </div>
            <div className="h-16 pl-4 w-11/12  flex gap-3 items-center rounded-lg py-2 cursor-pointer hover:bg-[lightgray] transition-all">
                <MdSubscriptions className="text-[25px]" />
                <span className="text-[15px]">Subscription</span>
            </div>
            <div className="h-16 pl-4 w-11/12  flex gap-3 items-center rounded-lg py-2 cursor-pointer hover:bg-[lightgray] transition-all">
                <IoCopyOutline className="text-[25px]" />
                <span className="text-[15px]">You</span>
            </div>
        </div>
    )
}