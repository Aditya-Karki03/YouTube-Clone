import { FaPlay } from "react-icons/fa";
import { CiCircleInfo } from "react-icons/ci";
import { useEffect, useState } from "react";
import TrailerError from "./TrailerError";
import { useSelector } from "react-redux";
import { useTeaser } from "../CustomHooks/useTeaser";
import { useNavigate } from "react-router-dom";

export default function VideoBg({movieId=0,title='',description='',urlIdentifierToUsePlayAndMoreInfoBtn=''}){
   useTeaser(movieId);
   const[showMoreInfo,setShowMoreInfo]=useState(false);
   const navigate=useNavigate()
   const[movieDescription,setMovieDescription]=useState(description);
   const trailerVideo=useSelector((store)=>store?.movies?.trailer)
   useEffect(()=>{
    const timeOut=setTimeout(()=>{
       setMovieDescription('')
    },10000)

    return ()=> clearTimeout(timeOut);
   },[])
    // if(!trailerVideo&&trailerVideo[0].key){
        
    // }

    const playTheTrailer=()=>{
        navigate(`/viewTrailer/${movieId}`)
    }
    const showMoreInfoInModal=()=>{
        setShowMoreInfo(!showMoreInfo);
    }


   

    return(
        trailerVideo&&trailerVideo.length>0?
        <div className="w-full h-screen relative">
            <iframe className="absolute top-[7%] md:top-[2%] lg:top-[2%] w-full aspect-video md:aspect-video " src={`https://www.youtube.com/embed/${trailerVideo&&trailerVideo[0].key}?autoplay=1&mute=1&controls=0&showinfo=0&rel=0`}  title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
            <div className="absolute  h-full top-36 md:top-40 left-0">
                <div className={`w-[300px]  px-[20px] md:mx-12 text-white relative xl:top-10 `}>
                     <h1 className="text-3xl md:text-5xl font-[bold]">{title}</h1>
                     <p className="hidden md:block">{movieDescription}</p>


                     {/* The below code will make both the btns visible if we are in browse page, if we are watching the trailer in another page it won't be visible */}
                    {urlIdentifierToUsePlayAndMoreInfoBtn==''&&<div className="flex gap-2  mt-5">
                        <button onClick={playTheTrailer} className="flex items-center gap-2 p-1 px-5 rounded-md border bg-[white] text-[black] border-[lightgray] hover:opacity-80"><FaPlay /> Play</button>
                        <button onClick={showMoreInfoInModal} className="flex items-center gap-2 py-2 px-2 rounded-md border opacity-90 bg-[gray] text-[white] font-semibold  hover:opacity-70"><CiCircleInfo />More Info</button>
                    </div>}
                </div>
            </div>
            {showMoreInfo&& <div className="h-screen w-full flex flex-col justify-center items-center z-[100] fixed opacity-80 bg-black">
                    <p className="text-white   ">{description}</p>
                    <button onClick={showMoreInfoInModal} className="bg-white w-[50px] h-[30px] ">Close</button>
            </div> }
        </div>:
        <TrailerError/>
    )
}