import { ImgUrl } from "../Utils/constants"

export default function MovieCard({title,allMovies}){
    
    return(
        <div className="flex flex-col  overflow-x-scroll my-9">
            <h1 className="text-white px-5 font-semibold text-[20px]">{title}</h1>
            <div className="flex gap-2 ">
            {
               allMovies && allMovies.map(movie=>{
                    return(
                        <img className="w-72 h-48" key={movie.id} src={`${ImgUrl}${movie.backdrop_path}`} alt="Image Of the Movie" />
                    )
                })
            }
        </div>
        </div>
    )
}