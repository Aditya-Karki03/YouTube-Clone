import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import VideoBg from "./VideoBg";


export default function TrailerContainer(){
    const[trailerNumber,setTrailerNumber]=useState(0)
    useEffect(()=>{
        const randomTrailer=Math.floor(Math.random()*20);
        console.log(randomTrailer)
        if(randomTrailer==9 || randomTrailer==16) {
            setTrailerNumber(0)
        }  
        else setTrailerNumber(randomTrailer)
    },[])
    const movies=useSelector((store)=>store.movies?.movies?.results);
    if(movies==null)    return;//also known as eartly return 


   


    const recommendedMovie=movies[trailerNumber];
    

    const{original_title,overview,id}=recommendedMovie;

    return(
        <div className="">
            
            <VideoBg movieId={id}  title={original_title} description={overview}/>
           
        </div>
    )
}