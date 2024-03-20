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

export default function Browse(){
    const navigate=useNavigate();
   useNewMovies();
   useTopRated();
   useTrendingMovies();
   useRecommended();
   useUpComingMovies();

    function handleSignOut(){
        const auth = getAuth();
        signOut(auth).then(() => {
        // Sign-out successful.
        }).catch((error) => {
            console.log(error);
        });
        navigate('/')
    }


    return(
        <div className=" max-w-screen bg-[black] ">
            <div className=" z-20 flex items-center pr-2 justify-between fixed w-full bg-opacity-85 bg-[black]">
                <HeaderAndBg/>
                <div className="flex gap-4">
                    <img className="h-[50px] " src="https://occ-0-4995-2164.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229" alt=""></img>
                    <button className="text-[white]" onClick={handleSignOut}>(Sign Out)</button>
                </div>
            </div>
            <div>
                <TrailerContainer/>
            </div>
            <div className="bg-[black] my-4 -mt-64 bg-transparent">
                <ListOfMovies/>
            </div>
        </div>
    )
}