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
    }//!selector&&
    useEffect(()=>{
        //This is called memoization which means if we already have stored data into redux store after doing the API call then there is no need to
        //again do an API call instead we can use the save data and no need for the API call
        APICallforNewMovies()
    }
    ,[])
}