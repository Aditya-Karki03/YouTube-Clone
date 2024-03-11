
import { LuSquareDot } from "react-icons/lu";
import { useRestroAPI } from "../Utils/useRestroAPI";
import ShimmerForSearch from "./ShimmerForSearch";




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
                            <div key={item.card.info.id} className="border-b border-[lightgray] flex items-center justify-between">
                                <div  className=" px-5 py-5 w-3/4 ">
                                    <LuSquareDot className={item.card.info.itemAttribute.vegClassifier=='VEG'?'text-[green]':'text-[red]'} />
                                    <h2 className="font-semibold">{item.card.info.name}</h2>
                                    <p>{`₹${(item.card.info.price)/100}`}</p>
                                    <br />
                                    <p className="text-[gray] text-[13px]">{item.card.info.description}</p>
                                </div>
                                <div className="w-[125px]  flex flex-col items-end h-[125px] relative ">
                                        {/* image */}
                                        <img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/${item.card.info.imageId}`} alt="Food Image" className="w-[125px] h-full rounded-lg" />
                                        
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