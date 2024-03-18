import { FaPlay } from "react-icons/fa";
import { CiCircleInfo } from "react-icons/ci";

export default function MovieTitle(props){
    const{title,description}=props;
    return(
        <div className="w-[400px] px-[50px] text-white relative  bg-gradient-to-r from-black h-screen">
            <h1 className=" text-7xl font-[bold]">{title}</h1>
            <p>{description}</p>
            <div className="flex gap-2">
                <button className="flex items-center gap-2 p-1 px-5 rounded-md border bg-[white] text-[black] border-[lightgray]"><FaPlay /> Play</button>
                <button className="flex items-center gap-2 py-2 px-2 rounded-md border opacity-70 bg-[gray] text-[white] font-semibold border-[lightgray]"><CiCircleInfo />More Info</button>
            </div>
        </div>
    )
}