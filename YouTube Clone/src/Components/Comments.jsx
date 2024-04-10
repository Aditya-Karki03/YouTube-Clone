import { useEffect,useState } from "react"
import { CommentsAPI } from "../Constants";


export default function Comments({videoId,totalComments}){
    const[comments,setComments]=useState([])
    
    useEffect(()=>{
        apiCallForComments();
        
    },[videoId])

    function apiCallForComments(){
        const apiURL=CommentsAPI(videoId)
        fetch(apiURL)
        .then(res=>res.json())
        .then(json=>setComments(json.items))
        
    }
    
   

    return(
        <div className="flex flex-col gap-2">
            <h2 className="font-bold text-[25px]">{totalComments} Comments</h2>
            {
                comments && comments.map(comment=>(
                    <div key={comment.id} className="flex gap-2 p-2 bg-[#efeeee]">
                        <div className="min-w-[40px] h-[40px] ">
                                <img className="w-full h-full rounded-full" src={comment.snippet.topLevelComment.snippet.authorProfileImageUrl} alt="photo" />
                        </div>
                        <div  className="flex flex-col text-wrap">
                            <div className="">
                                 <p>{comment.snippet.topLevelComment.snippet.authorDisplayName}</p>
                            </div>
                            <p>{comment.snippet.topLevelComment.snippet.textOriginal}</p>
                        </div>
                    </div>
                    
                ))
            }
        </div>
    )
}