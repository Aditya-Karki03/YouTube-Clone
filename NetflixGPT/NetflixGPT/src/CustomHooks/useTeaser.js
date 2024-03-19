import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTrailer } from "../Utils/newMovieSlice";
import { options } from "../Utils/constants";

export const useTeaser=(movieId)=>{
    const dispatch=useDispatch();
    function APICallForVideos(){
        fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, options)
        .then(response => response.json())
        .then(response => {const arrayOfTeaser=response.results.filter((movie)=>movie.name=='Official Trailer');
                            dispatch(addTrailer(arrayOfTeaser))
                           
    })
        .catch(err => console.error(err));
            }
    
    
    useEffect(()=>{
        APICallForVideos()
    },[])
}