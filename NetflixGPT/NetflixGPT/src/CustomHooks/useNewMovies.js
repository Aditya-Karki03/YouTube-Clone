import { useEffect } from "react";
import { options } from "../Utils/constants";

import { useDispatch } from "react-redux";
import { addMovies } from "../Utils/newMovieSlice";

    

   

export const  useNewMovies=()=>{
    const dispatch=useDispatch();
    function APICallforNewMovies(){
        fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options)
        .then(response => response.json())
        .then(response => dispatch(addMovies(response)))
        .catch(err => console.log(err));
    }
    useEffect(()=>{
        APICallforNewMovies()
    }
    ,[])
}