import { useParams } from "react-router-dom"


export default function VideoDisplay() {

    const params=useParams();
    const{id}=params;
    console.log(id)
    
    return(
        <div className="pl-8 mt-20 h-screen flex justify-center ">
            <div className="h-5/6 ">
                <iframe  className="aspect-video  h-3/5" src={`https://www.youtube.com/embed/${id}?si=3jki0qHFa_ayeGtR`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen='true'></iframe>
            </div>
        </div>
    )
}