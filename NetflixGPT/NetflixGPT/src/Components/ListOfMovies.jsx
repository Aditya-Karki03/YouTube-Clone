import { useSelector } from "react-redux";
import MovieCard from "./MovieCard";

export default function ListOfMovies(){
    const MoviesList=useSelector(store=>store?.movies?.movies);
    const topRatedMovies=useSelector(store=>store?.movies?.topRatedMovies);
    const TrendingMovies=useSelector(store=>store?.movies?.trendingMovies);
    const recommendedMovies=useSelector(store=>store?.movies?.recommendedMovies)
    const upComingMovies=useSelector(store=>store?.movies?.upComingMovies)

    return(
        <div className="px-5  pb-14">
            <MovieCard title={'Now Playing'}  allMovies={MoviesList && MoviesList.results}/>
            <MovieCard title={'Top Rated'} allMovies={topRatedMovies && topRatedMovies.results}/>
            <MovieCard title={'Trending'} allMovies={TrendingMovies && TrendingMovies.results}/>
            <MovieCard title={'Recommended Movies'} allMovies={recommendedMovies && recommendedMovies.results}/>
            <MovieCard title={'Upcoming'} allMovies={upComingMovies && upComingMovies.results}/>

        </div>
    )
}