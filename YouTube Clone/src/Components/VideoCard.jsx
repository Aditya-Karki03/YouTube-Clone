import { FaRegUser } from "react-icons/fa";

export default function VideoCard({values}){
    
    const{title,thumbnails,channelTitle}=values.snippet;
    const { viewCount } = values.statistics;

    const viewCountInNum=parseInt(viewCount);

    const countInInd = viewCountInNum.toLocaleString('en-US');
    
    const shortTitle=title.length>60?title.substring(0,50).concat('...'):title;

    
    return(
        <div className=" z-0 w-80 h-80 rounded-lg shadow-md cursor-pointer hover:scale-105 transition-all">
            <img className="rounded-lg" src={`${thumbnails.medium.url}`} alt="Thumbnail" />
            
            <div className="flex py-3 px-3 gap-3">
                <div className="h-[40px] w-[40px] flex justify-center items-center hover:bg-[lightgray] rounded-full">
                    <FaRegUser className="h-[25px] w-[25px]" />
                </div>
                <div className="">
                    <p className="font-semibold ">{shortTitle}</p>
                    <p className="text-[15px]">{channelTitle}</p>
                    <p className="text-[15px]">{`${countInInd} views`}</p>
                </div>
            </div>
        </div>
    )
}