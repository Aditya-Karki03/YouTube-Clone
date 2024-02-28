import adityaLogo from '../Images/Aditya-logos.jpeg'; 
import { IoSearch } from "react-icons/io5";
import { BiSolidOffer } from "react-icons/bi";
import { IoHelpBuoyOutline } from "react-icons/io5";
import { CiUser } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
// image
// location
// search
// Offers
// Help
// Sign In 
// Cart
export default function NavBar(){
    return (
    <div className='h-2/10 w-full bg-white text-black flex justify-around items-center fixed shadow-[0_35px_60px_-10px_rgba(0,0,0,0.1)]'>
        {/* <h1 className='bg-black'>Hello</h1> */}
        <img src={adityaLogo} alt="Aditya Logo" className='w-[90px] h-[90px] rounded-full'  />
        <ul className='flex gap-4 justify-around font-semibold w-1/2 h-[100px] '>
            <li className='flex items-center gap-3 '>
                <IoSearch/>
                <p>Search</p>
            </li>    
            <li className='flex items-center gap-3'>
                <BiSolidOffer />
                <p>Offers</p>
            </li>
            <li className='flex items-center gap-3'>
                <IoHelpBuoyOutline />
                <p>Help</p>
            </li>
            <li className='flex items-center gap-3'>
                <CiUser />
                <p>Sign In</p>
            </li>
            <li className='flex items-center gap-3'>
                <CiShoppingCart />
                <p>Cart</p>
            </li>
        </ul>       
    </div>
    )
}