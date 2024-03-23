import { ImgUrl } from "../Utils/constants"
import { FaChevronLeft } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa";
import { useState } from "react";

export default function MovieCard({title,allMovies}){
    const[image,setImage]=useState(3);
    const[info,setInfo]=useState(false)

    function showNextImage(){
        setImage(image=>image+4);
    }//onClick={showPrevImage}
//transition-all translate-x-[-100%]


    // function additionalInfo(){
    //     setInfo(true);
    // }

    // function removeAdditionalInfo(){
    //     setInfo(false);
    // }

    //<div  key={movie.id} className="">
    // (movie.backdrop_path)&&<img  className={`w-60 hover:scale-150  h-48 transition-all ${info&&'w-64 h-56'}`} src={`${ImgUrl}${movie.backdrop_path||movie.poster_path}`} alt="Image Of the Movie" />
    // </div>

    return(
        <div className="flex flex-col   overflow-x-auto my-9">
            <h1 className="text-white  px-5 font-semibold text-[20px]">{title}</h1>
            
                <div className="flex relative border border-white  gap-5 h-[300px] z-10 transition-all mt-7 ">
                    {/* <button  className="text-white text-[20px] hover:text-[30px] transition-all hover:opacity-80  w-9 h-full opacity-60 bg-black left-0 "><FaChevronLeft /></button> */}
                    
                    {
                    allMovies && allMovies.map(movie=>{
                            return(
                                <div key={movie.id} className="w-[250px] flex-shrink-0 border border-red-500">
                                    <img  className={`w-60 hover:scale-150  h-48 transition-all ${info&&'w-64 h-56'}`} src={`${ImgUrl}${movie.backdrop_path||movie.poster_path}`} alt="Image Of the Movie" />
                                </div>
                            )
                        })
                    }
                    {/* <button onClick={showNextImage}  className="text-white text-[20px] hover:text-[30px] transition-all hover:opacity-80 absolute w-9 h-full opacity-60 bg-black right-0"><FaChevronRight /></button> */}
                </div>
           
        </div>
    )
}//onMouseOut={removeAdditionalInfo} onMouseOver={additionalInfo}