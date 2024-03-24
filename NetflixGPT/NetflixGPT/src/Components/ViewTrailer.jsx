import { useParams } from "react-router-dom";
import VideoBg from "./VideoBg";
import HeaderAndBg from "./HeaderAndBg";

export default function ViewTrailer(){
    const params=useParams();
    const{id}=params;
    

    return(
        <div className=" h-screen bg-black overflow-hidden">
            <HeaderAndBg/>
            <VideoBg movieId={id} urlIdentifierToUsePlayAndMoreInfoBtn={id} />
        </div>
    )
}