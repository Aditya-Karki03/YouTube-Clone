export default function ShimmerForMovieCard(){
    return(
        <div className=" w-[95vw] px-10 mt-6 flex flex-col items-center gap-[30px] top-[30%] bg-[black] opacity-90 cursor-pointer ">
        <div className="flex gap-[30px] mt-[70px] justify-center">
            <div className="w-60   h-48 rounded-lg bg-[gray] flex flex-col items-center justify-center cursor-pointer  hover:scale-110   transition-all duration-75 flex-shrink-0"></div>
            <div className="w-60   h-48 rounded-lg bg-[gray] flex flex-col items-center justify-center cursor-pointer   hover:scale-110   transition-all duration-75 flex-shrink-0"></div>
            <div className="w-60   h-48 rounded-lg bg-[gray] flex flex-col items-center justify-center cursor-pointer   hover:scale-110   transition-all duration-75 flex-shrink-0"></div>
        </div>
        <div className="flex gap-[30px] justify-center">
            <div className="w-60   h-48 rounded-lg bg-[gray] flex flex-col items-center justify-center cursor-pointer   hover:scale-110   transition-all duration-75 flex-shrink-0"></div>
            <div className="w-60   h-48 rounded-lg bg-[gray] flex flex-col items-center justify-center cursor-pointer   hover:scale-110   transition-all duration-75 flex-shrink-0"></div>
            <div className="w-60   h-48 rounded-lg bg-[gray] flex flex-col items-center justify-center cursor-pointer   hover:scale-110   transition-all duration-75 flex-shrink-0"></div>
        </div>
        <div className="flex gap-[30px] justify-center">
            <div className="w-60   h-48 rounded-lg bg-[gray] flex flex-col items-center justify-center cursor-pointer   hover:scale-110   transition-all duration-75 flex-shrink-0"></div>
            <div className="w-60   h-48 rounded-lg bg-[gray] flex flex-col items-center justify-center cursor-pointer   hover:scale-110   transition-all duration-75 flex-shrink-0"></div>
            <div className="w-60   h-48 rounded-lg bg-[gray] flex flex-col items-center justify-center cursor-pointer   hover:scale-110   transition-all duration-75 flex-shrink-0"></div>
        </div>
    </div>
    )
}