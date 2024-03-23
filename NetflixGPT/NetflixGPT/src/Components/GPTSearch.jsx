import { useRef } from "react";
import openai from "../Utils/openAi";
import { options } from "../Utils/constants";
import { useDispatch } from "react-redux";
import { addSuggestedMovies } from "../Utils/GPTSearchSlice";
import MovieCard from "./MovieCard";
import { useSelector } from "react-redux";

export default function GPTSearch(){
    const SearchedText=useRef(null);
    const dispatch=useDispatch();

    const selector=useSelector(store=>store?.search?.suggestedMovies)
    const{recommendedByGPT,movidData}=selector;
    console.log(movidData)

    async function handleClick(e){
        e.preventDefault();
        //Here we will make the API call for OPENai

        const query=`Work like a movie recommendation system.And your result should only consist of 5 movies comma separated. ${SearchedText.current.value}. Your response should be like the mentioned example. E.g.:- Sholay,Jodha Akhbar,Robot,KGF `;

        const suggestedMovies = await openai.chat.completions.create({
            messages: [{ role: 'user', content: query }],
            model: 'gpt-3.5-turbo',
          });
          if(!suggestedMovies.choices){
            alert('No such movie found. Please try again!');
            return;
          }//.
          const movieSuggestedByGPT=suggestedMovies?.choices[0]?.message?.content.split(',');
       //here I will make function call for each of 5 movies suggested by GPT to be displayed onto the UI
       //using TMDB api
       const promiseArray=movieSuggestedByGPT.map(movie=>dispLayingSuggestedMovies(movie));
       //The above promiseArray will return me an array consisting of 5 promises because dispLayingSuggestedMovies is a async function it takes sometime to resolve the promise
       const TMDBdata=await Promise.all(promiseArray);
       dispatch(addSuggestedMovies({recommendedByGPT:movieSuggestedByGPT,movidData:TMDBdata}))
    //    console.log(TMDBdata);
        
    }

    const dispLayingSuggestedMovies=async(movie)=>{
        const data=await fetch(`https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`, options)
        const response=await data.json();
        return response.results;//opacity-80 bg-black
    }

    return(
        <div className={`  overflow-x-scroll flex flex-col items-center  min-h-screen bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/93da5c27-be66-427c-8b72-5cb39d275279/94eb5ad7-10d8-4cca-bf45-ac52e0a052c0/IN-en-20240226-popsignuptwoweeks-perspective_alpha_website_medium.jpg')] bg-cover  bg-repeat-y `}>
            <form className="flex  justify-center items-center gap-4  mt-[150px]  outline-none">
                <input ref={SearchedText} className="border rounded-md w-[300px] px-1 h-[40px] md:p-2 md:w-[400px] outline-none" type="text" placeholder="Which type of movie would you like to watch?" />
                <button onClick={(e)=>handleClick(e)} className="p-2 hover:bg-red-800 rounded-md bg-red-700 outline-none text-white font-semibold">Search</button>
            </form>
            
            <div className=" w-[80vw] px-10 mt-6  top-[30%] bg-black cursor-pointer ">
                {
                    recommendedByGPT&&recommendedByGPT.map((movie,index)=><MovieCard key={movie} title={movie} allMovies={movidData[index]}/>)
                }
                
            </div>
        </div>
    //     <div className="relative">
    //     <div className="overflow-x-scroll flex flex-col items-center h-[210vh] bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/93da5c27-be66-427c-8b72-5cb39d275279/94eb5ad7-10d8-4cca-bf45-ac52e0a052c0/IN-en-20240226-popsignuptwoweeks-perspective_alpha_website_medium.jpg')] bg-cover bg-repeat-y blur-sm backdrop-filter backdrop-blur-md">
    //       <form className="flex justify-center items-center gap-4 absolute mt-[150px] left-[50%] translate-x-[-50%] outline-none">
    //         <input ref={SearchedText} className="border rounded-md p-2 w-[400px] outline-none" type="text" placeholder="Which type of movie would you like to watch?" />
    //         <button onClick={(e) => handleClick(e)} className="p-2 hover:bg-red-800 rounded-md bg-red-700 outline-none text-white font-semibold">Search</button>
    //       </form>
    //     </div>
    //     <div className="w-[80vw] px-10 z-40 absolute top-64 bg-black">
    //       {recommendedByGPT && recommendedByGPT.map((movie, index) => <MovieCard key={movie} title={movie} allMovies={movidData[index]} />)}
    //     </div>
    //   </div>
      
      
      

    )
}





