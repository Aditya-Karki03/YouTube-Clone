import logo from '../Assets/Aditya-logos.jpeg'
import { FaSearch } from "react-icons/fa";
import { BiSolidOffer } from "react-icons/bi";
import { IoHelpBuoyOutline } from "react-icons/io5";
import { CiUser } from "react-icons/ci";
import { FaOpencart } from "react-icons/fa";
export default function NavBar(){

    return(
        <div className="w-screen fixed top-0 left-0 h-24  shadow-md flex justify-around items-center p-4">
            <img src={logo} alt="Logo" className='w-[80px] h-[80px]' />
            <div className="flex justify-between  w-[600px]">
                <div className="flex gap-2 items-center text-[17px] hover:text-OnHoverColor hover:cursor-pointer">
                    <FaSearch /> <span>Search</span>
                </div>
                <div className="flex gap-2 items-center text-[17px] hover:text-OnHoverColor hover:cursor-pointer">
                     <BiSolidOffer /> <span>Offers</span>
                </div>
                <div className="flex gap-2 items-center text-[17px] hover:text-OnHoverColor hover:cursor-pointer">
                    <IoHelpBuoyOutline /> <span>Help</span>
                </div>
                <div className="flex gap-2 items-center text-[17px] hover:text-OnHoverColor hover:cursor-pointer">
                    <CiUser /> <span>Sign In</span>
                </div>
                <div className="flex gap-2 items-center text-[17px] hover:text-OnHoverColor hover:cursor-pointer">
                    <FaOpencart /> <span>Cart</span>
                </div>
            </div>
        </div>
    )
}