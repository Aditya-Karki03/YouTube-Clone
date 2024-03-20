import { useEffect } from "react"
import { options } from "../Utils/constants";
import { useDispatch } from "react-redux";
import { upComingMovies } from "../Utils/newMovieSlice";


export const useUpComingMovies=()=>{
    const dispatch=useDispatch();
    useEffect(()=>{
        APICallForUpComingMovies();
    },[])

    function APICallForUpComingMovies(){
        fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', options)
        .then(response => response.json())
        .then(response => dispatch(upComingMovies(response)))
        .catch(err => console.error(err));
    }

}