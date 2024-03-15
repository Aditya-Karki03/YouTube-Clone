import { NetflixLogo } from "../Utils/constants"

export default function HeaderAndBg(){
    return(
        // box-shadow: 5px 10px 10px rgba(0,0,0,0.5) inset;
        //shadow-[inset_5px_10px_20px_rgba(0,0,0,0.4)]
        <div className=" w-[150px] h-[70px]  ">
            <img src={NetflixLogo} alt="Netflix logo" className="w-[150px] absolute " />
        </div>
    
    )
}//box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;