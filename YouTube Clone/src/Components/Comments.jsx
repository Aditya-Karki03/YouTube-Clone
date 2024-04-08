import { useEffect,useState } from "react"
import { LiaCommentAltSolid } from "react-icons/lia";

export default function Comments({videoId}){
    const[comments,setComments]=useState([])

    useEffect(()=>{
        apiCallForComments();
    },[])

    function apiCallForComments(){
        fetch(`https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet&maxResults=500&videoId=${videoId}&key=AIzaSyAuqNgaTeE-CKflMbl83cBpF7DYmlC7VAY`)
        .then(res=>res.json())
        .then(json=>setComments(json.items))
    }
    
    if(comments.length>0)   console.log(comments)

    return(
        <div className="flex flex-col gap-2">
            <h2 className="font-bold text-[25px]">{comments.length} Comments</h2>
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