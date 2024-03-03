import { MdStarRate } from "react-icons/md";
//name={restro.info.name} imageId={restro.info.cloudinaryImageId} rating={restro.info.avgRatingString} time={restro.info.sla.slaString} locality={restro.info.locality} areaName={restro.info.areaName}
export default function TopRestaurantCard({name,imageId,rating,time,locality, areaName}){
    return(
        <div className="w-[961px] flex justify-center overflow-hidden border-b border-b-[lightgray]">
                <div className="h-[300px] hover:cursor-pointer hover:scale-90 transition ease-in-out ">
                    <div className={"bg-[url('https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/f01666ac73626461d7455d9c24005cd4')] shadow-inner bg-cover bg-center h-[150px] w-[250px] rounded-xl"}>
                        
                    </div>
                    <div className=" ">
                        <p className="font-bold text-[20px]">{name}</p>
                        <div>
                            <div className="flex gap-1 items-center">
                                <div className="w-[20px] h-[20px] rounded-[50%] bg-[green] flex justify-center items-center text-[white]">
                                    <MdStarRate />
                                </div>
                                <span className="font-medium">4.5 . 25-30 mins</span>
                            </div>
                            <div className="text-[gray] font-normal">
                                <p>Sweets, South Indian</p>
                                <p>Fancy Bazar</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}