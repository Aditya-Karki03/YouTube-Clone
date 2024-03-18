import { FaPlay } from "react-icons/fa";
import { CiCircleInfo } from "react-icons/ci";

import { useSelector } from "react-redux";
import { useTeaser } from "../CustomHooks/useTeaser";
// import MovieTitle from "./MovieTitle";

export default function VideoBg({movieId,title,description}){
   useTeaser(movieId);
   const trailerVideo=useSelector((store)=>store?.movies?.trailer)


    return(
        <div className="w-full h-screen  bg-gradient-to-r from-black">
            <iframe className="w-full  h-full  aspect-video " src={`https://www.youtube.com/embed/${trailerVideo&&trailerVideo[0].key}?autoplay=1&mute=1`}  title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
            <div className="absolute  h-full top-56 left-0">
                <div className="w-[400px]  px-[50px] text-white relative  ">
                     <h1 className=" text-7xl font-[bold]">{title}</h1>
                     <p>{description}</p>
                    <div className="flex gap-2 mt-5">
                        <button className="flex items-center gap-2 p-1 px-5 rounded-md border bg-[white] text-[black] border-[lightgray] hover:opacity-80"><FaPlay /> Play</button>
                        <button className="flex items-center gap-2 py-2 px-2 rounded-md border opacity-90 bg-[gray] text-[white] font-semibold  hover:opacity-70"><CiCircleInfo />More Info</button>
                    </div>
                </div>
            </div>
        </div>
    )
}