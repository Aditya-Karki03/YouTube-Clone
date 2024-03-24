import HeaderAndBg from "./HeaderAndBg"
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useNewMovies } from "../CustomHooks/useNewMovies";
import TrailerContainer from "./TrailerContainer";
import ListOfMovies from "./ListOfMovies";
import { useTopRated } from "../CustomHooks/useTopRated";
import { useTrendingMovies } from "../CustomHooks/useTrendingMovies";
import { useRecommended } from "../CustomHooks/useRecommended";
import { useUpComingMovies } from "../CustomHooks/useUpComingMovies";
import { useDispatch, useSelector } from "react-redux";
import { EnableGPTSearch } from "../Utils/GPTSearchSlice";
import GPTSearch from "./GPTSearch";
import { addSuggestedMovies } from "../Utils/GPTSearchSlice";


export default function Browse(){
   const navigate=useNavigate();
   const dispatch=useDispatch();
   useNewMovies();
   useTopRated();
   useTrendingMovies();
   useRecommended();
   useUpComingMovies();
   const GPTSearchEnabled=useSelector(store=>store?.search?.search)
   
   


    function handleSignOut(){
        const auth = getAuth();
        signOut(auth).then(() => {
        // Sign-out successful.
        }).catch((error) => {
            console.log(error);
        });
        navigate('/')
    }

function handleGPTSearch(){
    dispatch(EnableGPTSearch())
    //Whenever I click on the on GPT Search or Homepage it should empty my addSuggestedMovies
    dispatch(addSuggestedMovies({recommendedByGPT:null,movidData:null}))
}
    return(
        <div className=" max-w-screen  bg-[black] ">
            <div className=" z-20 flex items-center pr-2 justify-between fixed w-full bg-opacity-85 bg-[black]">
                <HeaderAndBg/>
                <button onClick={handleGPTSearch} className=" p-1 px-3 rounded-lg bg-[purple] hover:bg-[#630b63] text-white font-semibold ">{GPTSearchEnabled?'Homepage':'GPT Search'}</button>
                <div className="flex flex-col gap-4 md:flex py-2">
                    <img className="h-[50px] w-[60px] " src="https://occ-0-4995-2164.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229" alt=""></img>
                    <button className="text-[white]" onClick={handleSignOut}>(Sign Out)</button>
                </div>
            </div>
            <div className="" >
            {
                GPTSearchEnabled?
                    <div className="">
                        <GPTSearch/>
                    </div>
                :
                <>
                   <div className="" >
                        <TrailerContainer/>
                    </div>
                    <div className="bg-[black] border  -mt-[480px] md:-mt-[380px] xl:-mt-[280px] 2xl:mt-0  bg-transparent">
                        <ListOfMovies/>
                    </div> 
                </>
            }
                    
            </div>
        </div>
    )
}