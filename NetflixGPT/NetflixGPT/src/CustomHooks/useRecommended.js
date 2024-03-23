import { useEffect } from "react"
import { options } from "../Utils/constants";
import { useDispatch } from "react-redux";
import { recommendedMovies } from "../Utils/newMovieSlice";



export const useRecommended=()=>{
    
    const dispatch=useDispatch()
    // !selector&&
    useEffect(()=>{
       APICallForRecommended();
    },[])

    function APICallForRecommended(){
        fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc', options)
        .then(response => response.json())
        .then(response => dispatch(recommendedMovies(response)))
        .catch(err => console.error(err));
    }

}