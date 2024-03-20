import { useEffect } from "react";
import { options } from "../Utils/constants";
import { useDispatch } from "react-redux";
import { TrendingMovies } from "../Utils/newMovieSlice";

export const useTrendingMovies=()=>{
    const dispatch=useDispatch();
    useEffect(()=>{
        APICallForTrendingMovies();
    },[])

    function APICallForTrendingMovies(){
        fetch('https://api.themoviedb.org/3/trending/movie/day?language=en-US', options)
            .then(response => response.json())
            .then(response => dispatch(TrendingMovies(response)))
            .catch(err => console.error(err));
    }
}