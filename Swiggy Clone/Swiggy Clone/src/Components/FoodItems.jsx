import { IoIosArrowDropdown } from "react-icons/io";
import { IoIosArrowDropup } from "react-icons/io";
import { LuSquareDot } from "react-icons/lu";
import { useRestroAPI } from "../Utils/useRestroAPI";
import ShimmerForSearch from "./ShimmerForSearch";
import { useState } from "react";




export default function FoodItems(props){
    const {id, recommendedValues=null} = props;

    // const[secondTimeClicked,setSecondTimeClicked]=useState(indexNo)

    

    // const[itemClicked,setItemClicked]=useState(false);
    // function handleClicks(){
    //     if(itemClicked==ind)
    // }

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
                    
                     recommendedValues && recommendedValues.card.card.itemCards.map((item)=>{
                        return(
                            <div key={item.card.info.id} className="border-b border-[lightgray]">
                                <div  className=" px-5 py-10 ">
                                <LuSquareDot className={item.card.info.itemAttribute.vegClassifier=='VEG'?'text-[green]':'text-[red]'} />
                                <p>{item.card.info.name}</p>
                                <p>{`₹${(item.card.info.price)/100}`}</p>
                                <br />
                                <p>{item.card.info.description}</p>
                            </div>
                                <div>
                                        {/* image */}
                                        <button>ADD</button>
                                </div>
                            </div>
                        )
                    })
                }
                
                
            </div>
        </div>
    )
}