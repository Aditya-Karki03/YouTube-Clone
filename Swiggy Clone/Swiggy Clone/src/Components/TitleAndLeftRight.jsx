import { FaArrowCircleLeft } from "react-icons/fa";
import { FaArrowCircleRight } from "react-icons/fa";

export default function TitleAndLeftRight(){
    return(
        <div className="flex justify-between px-6 w-[961px]  items-center ">
                <h2 className="font-bold text-[20px]">Whats on your mind?</h2>
                <div className="flex gap-2 text-[25px] py-8  ">
                    <div className="hover:text-OnHoverColor hover:cursor-pointer"><FaArrowCircleLeft   /></div>
                    <div className="hover:text-OnHoverColor hover:cursor-pointer"><FaArrowCircleRight /></div>                 
                </div>
            </div>
    )
}