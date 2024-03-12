
import { LuSquareDot } from "react-icons/lu";
import { useRestroAPI } from "../Utils/useRestroAPI";
import ShimmerForSearch from "./ShimmerForSearch";




export default function FoodItems(props){
    const {id, recommendedValues=null} = props;

    const{itemCards}=recommendedValues?.card?.card || null;
    const{carousel}=recommendedValues?.card?.card || null;

   if(itemCards)   console.log(itemCards);
   else if(carousel)   console.log(carousel)

    const restroInfo=useRestroAPI(id);
    if(!restroInfo) return <ShimmerForSearch/>


    // function handleAccordion(){
    //     setVisibility(!visibility)
    // }
    

    return(
        <div className="cursor-pointer">
            {/* <div className="" onClick={handleAccordion}>
                <p className="flex justify-between items-center font-bold ">{`${title} (${lengthItem.length})`} {(visibility)?<IoIosArrowDropup />:<IoIosArrowDropdown />}</p>
            </div> */}
            <div className="">
                {
                    
                     recommendedValues && (itemCards || carousel).map((item)=>{
                        return(
                            <div key={itemCards && item.card.info.id || carousel && item.dish.info.id} className="border-b border-[lightgray] flex items-center justify-between">
                                <div  className=" px-5 py-5 w-3/4 ">
                                    <LuSquareDot className={(itemCards && item.card.info.itemAttribute.vegClassifier=='VEG'||carousel && item.dish.info.isVeg==1)?'text-[green]':'text-[red]'} />
                                    <h2 className="font-semibold">{(itemCards && item?.card?.info?.name) || carousel && item.dish.info.name}</h2>
                                    <p>{`₹${((itemCards && (item.card.info.price || item.card.info.defaultPrice)) || (carousel && (item.dish.info.price || item.dish.info.defaultPrice)))/100}`}</p>
                                    <br />
                                    <p className="text-[gray] text-[13px]">{itemCards && item.card.info.description || carousel && item.dish.info.description}</p>
                                </div>
                                <div className="w-[125px]  flex flex-col items-end h-[125px] relative ">
                                        {/* image */}
                                        <img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/${(itemCards && item.card.info.imageId)|| carousel && item.dish.info.imageId }`} alt="Food Image" className="w-[125px] h-full rounded-lg" />
                                        
                                        <button className="absolute font-semibold text-[15px] bg-[white] text-[#60b246] rounded-md w-[100px] h-[30px] left-[50%] bottom-2 translate-x-[-50%]" >ADD</button>
                                       
                                </div>
                            </div>
                        )
                    })
                }
                
                
            </div>
        </div>
    )
}