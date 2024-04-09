import { useEffect,useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import VideoCard from "./VideoCard";
import CardShimmer from "./Shimmers/CardShimmer";
import { addRecommendedVids } from "../Store/RecommendVidSlice";

export default function VideoContainer(){
    const[data,setData]=useState([]);
    const dispatch=useDispatch();

    useEffect(()=>{
        apiCallForVideoCards();
    },[])

    const apiCallForVideoCards=()=>{
        fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=AIzaSyAuqNgaTeE-CKflMbl83cBpF7DYmlC7VAY`)
        .then((res)=>res.json())
        .then(res=>setData(res))
        .catch(err=>alert(err));
    }
    if(data.length<=0)   return <CardShimmer/>;
    else{
        
        dispatch(addRecommendedVids(data.items))
    }
    const{items}=data;
   
    return(
        <div className="ml-20 mt-30 pt-4 px-3 flex justify-center  flex-shrink-0 flex-wrap gap-5 z-0 ">
            {
                items && items.map((item)=>
                    <Link to={`/watch/${item.id}`} key={item.id} state={{itemName:item}}>
                        <VideoCard
                            values={item}
                        />
                    </Link>
                )
            }
            
            
        </div>
    )
}