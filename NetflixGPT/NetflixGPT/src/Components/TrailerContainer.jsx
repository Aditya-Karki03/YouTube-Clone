import { useSelector } from "react-redux";
import VideoBg from "./VideoBg";
import MovieTitle from "./MovieTitle";

export default function TrailerContainer(){
    const movies=useSelector((store)=>store.movies?.movies?.results);
    if(movies==null)    return;//also known as eartly return 
    const recommendedMovie=movies[0];
    console.log(recommendedMovie)

    const{original_title,overview,id}=recommendedMovie;

    return(
        <div className="">
            <h1>This is trailer container</h1>
            <VideoBg movieId={id}/>
            <MovieTitle title={original_title} description={overview}/>
        </div>
    )
}