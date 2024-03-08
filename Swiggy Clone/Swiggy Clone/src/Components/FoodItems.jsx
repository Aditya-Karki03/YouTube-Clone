import { IoIosArrowDropdown } from "react-icons/io";
import { LuSquareDot } from "react-icons/lu";
import { useRestroAPI } from "../Utils/useRestroAPI";
import ShimmerForSearch from "./ShimmerForSearch";



export default function FoodItems(props){
    const { id, title, lengthItem,recommendedValues } = props;
// console.log(lengthItem ? lengthItem.length : "LengthItem is undefined");
    console.log(recommendedValues)
 
    const restroInfo=useRestroAPI(id);
    if(!restroInfo) return <ShimmerForSearch/>

    const {cards}=restroInfo[2].groupedCard.cardGroupMap.REGULAR;
 

    // const recommended=cards.filter((item)=>item.card.card.title);
  
    let {itemCards}=recommendedValues.card.card||null;
    const{carousel}=recommendedValues.card.card||null

    return(
        <div className="">
            <div className="">
                <p className="flex justify-between items-center">{`${title} (${lengthItem.length})`} <IoIosArrowDropdown /></p>
            </div>
            <div className="">
                {
                    
                    itemCards && itemCards.map((item)=>{
                        return(
                            <div key={item.card.info.id} className=" px-5 py-10 border-b border-[lightgray]">
                                <LuSquareDot className={item.card.info.itemAttribute.vegClassifier=='VEG'?'text-[green]':'text-[red]'} />
                                <p>{item.card.info.name}</p>
                                <p>{`₹${(item.card.info.price)/100}`}</p>
                                <br />
                                <p>{item.card.info.description}</p>
                            </div>
                        )
                    })
                }
                
                <div>
                    {/* image */}
                    <button>ADD</button>
                </div>
            </div>
        </div>
    )
}