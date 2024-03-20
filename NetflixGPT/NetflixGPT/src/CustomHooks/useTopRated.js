import { useEffect } from "react"
import { options } from "../Utils/constants";
import { useDispatch } from "react-redux";
import { TopRatedMovies } from "../Utils/newMovieSlice";

export const useTopRated=()=>{
    const dispatch=useDispatch()
    useEffect(()=>{
        APICallForPopularMoves();
    },[])

    const APICallForPopularMoves=()=>{
        fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
        .then(response => response.json())
        .then(response => dispatch(TopRatedMovies(response)))
        .catch(err => console.error(err));
    }
}