import { Link } from "react-router-dom"
import { ImgUrl } from "../Utils/constants"
import ShimmerForMovieCard from "./ShimmerForMovieCard"

export default function MovieCard({title,allMovies}){


    if(!allMovies) <ShimmerForMovieCard/>

    return(
        <div className="flex flex-col   overflow-x-auto my-9">
            <h1 className="text-white  px-5 font-semibold text-[20px]">{title}</h1>
            
                <div className="flex relative  gap-5 h-[340px] z-10 transition-all mt-7 ">
                    {/* <button  className="text-white text-[20px] hover:text-[30px] transition-all hover:opacity-80  w-9 h-full opacity-60 bg-black left-0 "><FaChevronLeft /></button> */}
                    
                    {
                    allMovies && allMovies.map(movie=>{
                            return(
                                <Link to={`/viewTrailer/${movie.id}`} key={movie.id}>
                                    <div  className="w-[250px] cursor-pointer h-[300px] group hover:scale-110  hover:opacity-100 transition-all duration-75 flex-shrink-0 ">
                                        <div className="">
                                            <img  className={`w-60   h-48 rounded-lg `} src={`${ImgUrl}${movie.backdrop_path||movie.poster_path}`} alt="Image Of the Movie" />
                                        </div>                                    
                                        <div className="text-white pr-1 w-full -translate-y-12 opacity-0 group-hover:opacity-100 group-hover:translate-y-3">
                                            <p className="font-semibold text-wrap -z-10  text-left">{movie.title}</p>
                                            <p className="w-full flex  ">{`Rating ${movie.vote_average.toFixed(1)}/10 (${movie.vote_count})`}</p>
                                        </div>
                                    </div>
                                </Link>
                            )
                        })
                    }
                    {/* <button onClick={showNextImage}  className="text-white text-[20px] hover:text-[30px] transition-all hover:opacity-80 absolute w-9 h-full opacity-60 bg-black right-0"><FaChevronRight /></button> */}
                </div>
           
        </div>
    )
}//onMouseOut={removeAdditionalInfo} onMouseOver={additionalInfo}