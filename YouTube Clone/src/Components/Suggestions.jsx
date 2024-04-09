// import { useState,useEffect } from "react";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import {useSelector} from 'react-redux'

export default function Suggestion(){
    // const[suggestion,setSuggestion]=useState([])
    // useEffect(()=>{
    //     apiCallForSuggestionVideos();
    // },[])

    // function apiCallForSuggestionVideos(){
    //     fetch(`https://youtube.googleapis.com/youtube/v3/playlists?part=snippet&channelId=${channelId}&maxResults=50&key=AIzaSyAuqNgaTeE-CKflMbl83cBpF7DYmlC7VAY`)
    //     .then(res=>res.json())
    //     .then(json=>setSuggestion(json.items))
    // }

    const selector=useSelector(store=>store.videoList.arrOfVids);
    console.log(selector)   



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