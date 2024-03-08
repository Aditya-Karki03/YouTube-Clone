import { useEffect,useState } from "react";
import { useParams } from "react-router-dom"
import ShimmerForWhatsOnYourMind from "./ShimmerForWhatsOnYourMind";
import { FaStar } from "react-icons/fa";
import { IoIosBicycle } from "react-icons/io";
import FoodItems from "./FoodItems";


export default function RestroMenu(){
    const {restroId}=useParams();
    const[multipleData,setMultipleData]=useState(null);  
    useEffect(()=>{
        apiCallForFetchingMenus();
    },[])

    const apiCallForFetchingMenus=async()=>{
        const data= await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.1811818&lng=91.749661&restaurantId=${restroId}&catalog_qa=undefined&submitAction=ENTER`);
        const menuItems=await data.json();
        setMultipleData(menuItems.data.cards);
        // setMenu(menuItems.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards || menuItems.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards )
    }
   
    
    if(multipleData==null)    return <ShimmerForWhatsOnYourMind/>
    const{name,cuisines,locality,sla,feeDetails,avgRating,totalRatingsString}=multipleData[0]?.card?.card?.info;
    
    const {cards}=multipleData[2].groupedCard.cardGroupMap.REGULAR;
 

    const recommended=cards.filter((item)=>item.card.card.title && (item.card.card.itemCards  || item.card.card.carousel));
    

    return (
      <div className="mt-[110px] px-24  ">
        <div className="border-b py-[20px] border-[lightgray]">
        <div className="flex  justify-between">
            <div className="nameAndAddresss">
                <h2 className="font-bold">{name}</h2>
                <p className="text-[gray] text-[13px]">{cuisines.join(', ')}</p>
                <p className="text-[gray] text-[13px]">{`${locality} ${sla.lastMileTravel}km`}</p>
            </div>
            <div className="ratings border-[1px] border-[lightgray] p-2 grid rounded-md hover:cursor-pointer ">
                <p className="flex justify-around items-center text-[#3d9b6d]  border-b border-[lightgray]"><FaStar /> {avgRating}</p>
                <p className="text-[10px] mt-2">{totalRatingsString}</p>
            </div>
        </div>
        <br />
        <p className="flex gap-1 items-center text-[gray] text-[14px]"><IoIosBicycle className="text-[20px] text-[#3e3d3db6]" />{' '} {feeDetails.message}</p>
        </div>
       
            {
                    //let {title}=recommended[0].card.card||null;
                    recommended.map((item,index)=>{
                        return (
                            <div key={index}  className="  py-5 border-b-[10px] border-[#e1e0e0]">
                                <FoodItems id={restroId} title={item.card.card.title} recommendedValues={recommended[index]} lengthItem={item.card.card.itemCards ||item.card.card.carousel} />
                            </div>
                        )
                    })
                    
            }
            
   
      </div>
    )
}