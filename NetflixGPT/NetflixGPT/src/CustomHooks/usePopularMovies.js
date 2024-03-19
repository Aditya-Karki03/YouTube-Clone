import { useEffect } from "react"
import { options } from "../Utils/constants";
import { useDispatch } from "react-redux";

export const usePopularMovies=()=>{
    const dispatch=useDispatch()
    useEffect(()=>{
        APICallForPopularMoves();
    },[])

    const APICallForPopularMoves=()=>{
        fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
    }
}