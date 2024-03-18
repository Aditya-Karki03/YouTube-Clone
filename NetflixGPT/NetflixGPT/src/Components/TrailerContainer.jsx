import { useSelector } from "react-redux";
import VideoBg from "./VideoBg";


export default function TrailerContainer(){
    const movies=useSelector((store)=>store.movies?.movies?.results);
    if(movies==null)    return;//also known as eartly return 
    const recommendedMovie=movies[0];
    

    const{original_title,overview,id}=recommendedMovie;

    return(
        <div className="">
            
            <VideoBg movieId={id}  title={original_title} description={overview}/>
           
        </div>
    )
}