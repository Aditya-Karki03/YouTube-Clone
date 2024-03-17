import { useEffect } from "react"
import { options } from "../Utils/constants";

export default function VideoBg({movieId}){

//    =[];
    function APICallForVideos(){
        fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, options)
        .then(response => response.json())
        .then(response => {const arrayOfTrailer=response.results.filter((movie)=>movie.name=='Official Teaser');
                            console.log(arrayOfTrailer)
                            return arrayOfTrailer;
    })
        .catch(err => console.error(err));
            }
    console.log(Trailer)

    useEffect(()=>{
        const Trailer = APICallForVideos()
    },[])

    return(
        <h1>This is the background trailer video</h1>
    )
}