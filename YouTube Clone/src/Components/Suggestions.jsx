// import { useState,useEffect } from "react";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import {useSelector} from 'react-redux'

export default function Suggestion(){
 
    const selector=useSelector(store=>store.videoList.arrOfVids);
  



    return(
        <div className="flex flex-col justify-center items-center gap-5 pt-3">
            {
                selector && selector.map(item=>{
                    return(
                        <Link to={`/watch/${item.id}`} key={item.id} state={{itemName:item}}>
                        <VideoCard
                            values={item}
                        />
                    </Link>
                    )
                }
                    
                )
            }
        </div>
    )
}