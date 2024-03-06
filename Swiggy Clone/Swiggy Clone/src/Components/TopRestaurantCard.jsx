import { MdStarRate } from "react-icons/md";

export default function TopRestaurantCard(props){
    return(
        // <div className= "hover:cursor-pointer hover:scale-90 transition ease-in-out border-b border-b-[lightgray]">
        <div className={`hover:cursor-pointer hover:scale-90 transition ease-in-out border-b border-b-[lightgray]  ${props.heightOfDiv}`}>
  

                <div >
                        <img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${props.imageId}`} alt="logo" className={`rounded-xl ${props.widthOfImg} ${props.heightOfImage} `} />                
                </div>
                    <div className=" ">
                        <p className="font-bold text-[20px] ">{props.widthOfImg.includes('223px')?props.name.length>20?props.name.substring(0,20)+'...':props.name:props.name.length>25?props.name.substring(0,25)+'...':props.name}</p>
                        <div>
                            <div className="flex gap-1 items-center">
                                <div className="w-[20px] h-[20px] rounded-[50%] bg-[green] flex justify-center items-center text-[white]">
                                    <MdStarRate />
                                </div>
                                <span className="font-medium">{props.rating} . {props.time}</span>
                            </div>
                            <div className="text-[gray] font-normal">
                                <p>Sweets, {props.locality}</p>
                                <p>{props.areaName}</p>
                            </div>
                        </div>
                    </div>
                </div>
    )
}