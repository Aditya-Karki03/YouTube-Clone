import { Link } from "react-router-dom"
import { ImgUrl } from "../Utils/constants"
import ShimmerForMovieCard from "./ShimmerForMovieCard"

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../index.css'

export default function MovieCard({title,allMovies}){

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
      };

    if(!allMovies) <ShimmerForMovieCard/>

    return(
        <div className="flex flex-col   overflow-x-auto my-9">
            <h1 className="text-white  px-5 font-semibold text-[20px]">{title}</h1>
            
            {/* <div className="flex relative  gap-5 h-[340px] z-10 transition-all mt-7 ">                 */}
            <div className="  px-[40px] h-[370px]  ">   
            <Slider {...settings}>
                    {
                    allMovies && allMovies.map(movie=>{
                            return(
                               
                                <Link key={movie.id} to={`/viewTrailer/${movie.id}`} >
                                    <div  className="w-[250px] flex flex-col items-center justify-center cursor-pointer h-[300px] group hover:scale-110  hover:opacity-100 transition-all duration-75 flex-shrink-0 ">
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
                   </Slider>
                   </div>
                  {/* </div> */}
                  </div>
        
    )
} 