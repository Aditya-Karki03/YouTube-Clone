import { FaRegUser } from "react-icons/fa";

export default function VideoCard({values,flexbox=false}){
    //each video card becomes flex flex-col level element
    //
    const{title,thumbnails,channelTitle}=values.snippet;
    const{kind}=values.id;

    let ViewCount,viewCountInNum,countInInd;
    if(values.statistics){
        ViewCount=values.statistics.viewCount;
         viewCountInNum=parseInt(ViewCount);

        countInInd = viewCountInNum.toLocaleString('en-US');
    }

   
    
    // const shortTitle=title.length>60?title.substring(0,50).concat('...'):title;
    //video description is also provided

    
    return(
        <div className={flexbox?`z-0 w-full flex h-60 rounded-lg shadow-md cursor-pointer hover:scale-105 transition-all`:` z-0 w-80 h-80 rounded-lg shadow-md cursor-pointer hover:scale-105 transition-all`}>
            <img className={(kind=='youtube#channel')?'rounded-full w-60 h-60':'rounded-lg w-80'} src={`${thumbnails.medium.url}`} alt="Thumbnail" />
            
            <div className="flex py-3 px-3 gap-3">
                <div className="h-[40px] w-[40px] flex justify-center items-center hover:bg-[lightgray] rounded-full">
                    <FaRegUser className="h-[25px] w-[25px]" />
                </div>
                <div className="w-full overflow-hidden">
                    <p className="font-semibold w-full h-12 block whitespace-normal overflow-hidden overflow-ellipsis ">{title}</p>
                    <p className="text-[15px]">{channelTitle}</p>
                    {
                        flexbox && <p className="mt-4">{values.snippet.description}</p>
                    }
                    <p>{countInInd!==undefined&&`${countInInd} views`}</p>
                    {/* <p className="text-[15px]">{``}</p> */}
                </div>
            </div>
        </div>
    )
}