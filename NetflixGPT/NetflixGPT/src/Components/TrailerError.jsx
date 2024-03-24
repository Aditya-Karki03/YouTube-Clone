import HeaderAndBg from "./HeaderAndBg";

export default function TrailerError(){
    
    return(
        <div className="h-screen w-screen bg-black">
            <HeaderAndBg/>
            <h1 className="text-white font-bold text-[20px] flex justify-center items-center">No Trailer Found. Please search explicitly on YouTube</h1> 
        </div>
              
    )
}