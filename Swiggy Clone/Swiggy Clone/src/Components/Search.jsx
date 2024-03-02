import { useEffect, useState } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import ShimmerForSearch from "./ShimmerForSearch";
export default function Search(){
    const[totalPopularCuisines,setTotalPopularCuisines]=useState([]);
    useEffect(()=>{
        PopularCuisinesAPIcall();
    },[])
    const PopularCuisinesAPIcall=async()=>{
        const data=await fetch('https://www.swiggy.com/dapi/landing/PRE_SEARCH?lat=26.1811818&lng=91.749661');
        const json=await data.json();
        setTotalPopularCuisines(json?.data?.cards);
    }
   
    console.log(totalPopularCuisines.length);

        return (
        <div className="mt-[130px] w-screen grid justify-center items-center gap-4">
           <div className="input w-full justify-center flex gap-2">
                <input type="search" placeholder="Search for restaurants and food" className="border border-[lightgray] w-[700px] outline-none p-2 pl-5 rounded-lg" />
                <button className="border border-[lightgray] p-3 w-[50px] flex justify-center items-center rounded-lg hover:bg-OnHoverColor hover:text-[white]"><FaMagnifyingGlass/></button>
           </div>
            <h2 className="font-bold text-center">Popular Cuisines</h2>
            <div className="flex">                
            {
                totalPopularCuisines && totalPopularCuisines.length === 0 ?
                    <ShimmerForSearch/> :
                    (totalPopularCuisines.length==1?
                        <div className="flex" >
                            <img src={'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/' + totalPopularCuisines[0]?.card?.card?.imageGridCards?.info?.imageId} alt="food items" className="w-[500px] h-[500px]" />
                        </div>:
                        totalPopularCuisines[1].card.card.imageGridCards.info.map((Cuisines) => (
                            <div className="flex" key={Cuisines.id}>
                                <img src={'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/' + Cuisines.imageId} alt="food items" className="w-[70px] h-[70px]}" />
                            </div>
                        )
                    
                    ))
}

            </div>
        </div>
    )
}