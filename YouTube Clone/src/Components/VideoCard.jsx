import { FaRegUser } from "react-icons/fa";

export default function VideoCard({values}){
    
    const{title,thumbnails,channelTitle}=values.snippet;
    const{statistics}=values;
    console.log(title,thumbnails,channelTitle,statistics)

    return(
        <div className=" z-0 w-80 rounded-lg shadow-md cursor-pointer hover:scale-105 transition-all">
            <img className="rounded-lg" src={`${thumbnails.medium.url}`} alt="Thumbnail" />
            
            <div className="flex py-3 gap-3">
                <div className="h-[40px] w-[40px] flex justify-center items-center hover:bg-[lightgray] rounded-full">
                    <FaRegUser className="h-[25px] w-[25px]" />
                </div>
                <div className="">
                    <p className="font-semibold ">{title}</p>
                    <p className="text-[15px]">{channelTitle}</p>
                    <p className="text-[15px]">{`${statistics.viewCount} views`}</p>
                </div>
            </div>
        </div>
    )
}