import { useEffect,useState } from "react";
import {  useParams } from "react-router-dom"
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import { SearchedItemAPI } from "../Constants";

export default function SearchedPage(){
    const[searchedRes,setSearchedRes]=useState([])
    const params=useParams();
    useEffect(()=>{
        apiCallForSearchedItems()
    },[params.id])


    function apiCallForSearchedItems(){
        const apiURL=SearchedItemAPI(params.id)
        fetch(apiURL)
        .then(res=>res.json())
        .then(json=>setSearchedRes(json.items));
    }
    
     if(searchedRes.length==0)   return;
    return(
        <div className="mt-20 flex justify-center  px-3 w-full">
            
            <div className=" flex flex-col pl-20 justify-center py-4 flex-shrink-0 w-4/5 gap-5 z-0">
            {
                searchedRes.map((res)=>(
                    <Link to={`/watch/${res.id.videoId}`} key={res.id.channelId || res.id.videoId} state={{itemName:res}}>
                        <VideoCard  values={res} flexbox={true}/>
                    </Link>
                   
                ))
            }
        </div>
        </div>
    )
}