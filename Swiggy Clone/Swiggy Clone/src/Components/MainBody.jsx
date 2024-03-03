import { useEffect, useState } from "react"
import ShimmerForWhatsOnYourMind from "./ShimmerForWhatsOnYourMind";
import { FaArrowCircleRight } from "react-icons/fa";
import { FaArrowCircleLeft } from "react-icons/fa";
import TopRestaurantCard from "./TopRestaurantCard";

export default function MainBody(){
    const[whatsOnYourMind,setWhatsOnYourMind]=useState([]);
    const[topRestro,setTopRestro]=useState([]);
    // const[onlySixFoods,setOnlySixFoods]=useState([]);
    useEffect(()=>{
        APICallForMainBody()
    },[])
    const APICallForMainBody=async()=>{
        const data=await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.1811818&lng=91.749661&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
        const json=await data.json();
        setWhatsOnYourMind(json.data.cards[0].card.card.imageGridCards.info);
        setTopRestro(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
    }
    console.log(topRestro)
   
   

    return(
        <div className="w-screen mt-[100px] py-5 flex flex-col justify-center items-center ">
            <div className="flex justify-between px-6 w-[961px] items-center ">
                <h2 className="font-bold text-[20px]">Whats on your mind?</h2>
                <div className="flex gap-2 text-[25px]  ">
                    <div className="hover:text-OnHoverColor hover:cursor-pointer"><FaArrowCircleLeft   /></div>
                    <div className="hover:text-OnHoverColor hover:cursor-pointer"><FaArrowCircleRight /></div>                 
                </div>
            </div>
            <div className="w-[961px] flex justify-center  overflow-hidden border-b border-b-[lightgray]">
            {
                whatsOnYourMind.length==0?<ShimmerForWhatsOnYourMind/>:
                whatsOnYourMind.map((item)=>{
                    return <img key={item.id} src={'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/'+item.imageId} alt="food-items" className="h-[200px] w-[200px]" />
                } )     
            }
            </div>
            <div className="flex justify-between px-6 w-[961px] items-center ">
                <h2 className="font-bold text-[20px]">Top restaurant chains in Guwahati</h2>
                <div className="flex gap-2 text-[25px]  ">
                    <div className="hover:text-OnHoverColor hover:cursor-pointer"><FaArrowCircleLeft   /></div>
                    <div className="hover:text-OnHoverColor hover:cursor-pointer"><FaArrowCircleRight /></div>                 
                </div>
            </div>
            {
                topRestro.map((restro)=>{
                    <TopRestaurantCard key={restro.info.id} name={restro.info.name} imageId={restro.info.cloudinaryImageId} rating={restro.info.avgRatingString} time={restro.info.sla.slaString} locality={restro.info.locality} areaName={restro.info.areaName}  />
                })
            }
        </div>
    )
}