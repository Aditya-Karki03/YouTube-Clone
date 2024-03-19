import { useSelector } from "react-redux";
import MovieCard from "./MovieCard";

export default function ListOfMovies(){
    const MoviesList=useSelector(store=>store?.movies?.movies);
    // console.log(MoviesList);
    return(
        <div className="">
            <MovieCard title={'Now Playing'} allMovies={MoviesList && MoviesList.results}/>
            <MovieCard title={'Trending'} allMovies={MoviesList && MoviesList.results}/>
            <MovieCard title={'Recommended'} allMovies={MoviesList && MoviesList.results}/>
            <MovieCard title={'List'} allMovies={MoviesList && MoviesList.results}/>
            <MovieCard title={'Upcoming'} allMovies={MoviesList && MoviesList.results}/>

        </div>
    )
}