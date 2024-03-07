import { useEffect, useState } from "react"
import ShimmerForWhatsOnYourMind from "./ShimmerForWhatsOnYourMind";
import TopRestaurantCard, {HigherOrderComponentToDisplayOffers} from "./TopRestaurantCard";
import TitleAndLeftRight from "./TitleAndLeftRight";
import { Link } from "react-router-dom";

export default function MainBody(){
    
    const[whatsOnYourMind,setWhatsOnYourMind]=useState([]);
    const[topRestro,setTopRestro]=useState([]);
    const[restroWithOnlineDelivery,setRestroWithOnlineDelivery]=useState([]);
    // const[itemsToBeDisplayed,setItemsToBeDisplayed]=useState([])
    
    useEffect(()=>{
        APICallForMainBody()
    },[])
    const APICallForMainBody=async()=>{
        const data=await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.1811818&lng=91.749661&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
        const json=await data.json();
        setWhatsOnYourMind(json.data.cards[0].card.card.imageGridCards.info);
        setTopRestro(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setRestroWithOnlineDelivery(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }
   
   
    const OffersToBeDisplayed=HigherOrderComponentToDisplayOffers(TopRestaurantCard)

 

    return(
        <div className="w-screen mt-[100px] py-5  flex flex-col justify-center items-center ">
                <TitleAndLeftRight/>
            <div className="w-[961px] flex justify-center  overflow-hidden border-b border-b-[lightgray] py-4">
                {
                    whatsOnYourMind.length==0?<ShimmerForWhatsOnYourMind/>:
                    whatsOnYourMind.map((item)=>{
                        return <img key={item.id} src={'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/'+item.imageId} alt="food-items" className="h-[200px] w-[200px]" />
                    } )     
                }
            </div>
            
                {
                    topRestro && <TitleAndLeftRight/>
                }
                

             
            <div className="w-[961px]  flex flex-wrap justify-center items-center gap-10 overflow-hidden p-5 border-b border-b-[lightgray]">
            {
                topRestro&&topRestro.map((restro)=>  
                restro.info.aggregatedDiscountInfoV3?
                <Link to={`/restaurants/${restro.info.id}`} key={restro.info.id}>
                    <OffersToBeDisplayed
                                            
                                            heightOfDiv='h-[300px]'
                                            widthOfImg='w-[273px]'
                                            heightOfImage='h-[182px]'
                                            name={restro.info.name} 
                                            cuisines={restro.info.cuisines.length>3?restro.info.cuisines.slice(0,3):restro.info.cuisines}
                                            moreCuisines={restro.info.cuisines.length>3?'...':null}
                                            imageId={restro.info.cloudinaryImageId} 
                                            rating={restro.info.avgRatingString} 
                                            time={restro.info.sla.slaString} 
                                            locality={restro.info.locality} 
                                            areaName={restro.info.areaName}
                                            offers={restro.info.aggregatedDiscountInfoV3}   
                />
                </Link>
                :<Link to={restro.info.id} key={restro.info.id}>
                    <TopRestaurantCard
                                           
                                            heightOfDiv='h-[300px]'
                                            widthOfImg='w-[273px]'
                                            heightOfImage='h-[182px]'
                                            name={restro.info.name} 
                                            cuisines={restro.info.cuisines.length>3?restro.info.cuisines.slice(0,3):restro.info.cuisines}
                                            moreCuisines={restro.info.cuisines.length>3?'...':null}
                                            imageId={restro.info.cloudinaryImageId} 
                                            rating={restro.info.avgRatingString} 
                                            time={restro.info.sla.slaString} 
                                            locality={restro.info.locality} 
                                            areaName={restro.info.areaName}  
                                            />
                </Link>
                )
            }
            
            </div>
            <div className="p-5 border-b border-b-[lightgray]">
            <h2 className="font-bold text-[20px] p-6 w-[961px]">Restaurants with online food delivery in Guwahati</h2>
            <div className="w-[961px]  flex flex-wrap justify-center items-center gap-10 overflow-hidden">
               
                {
                    restroWithOnlineDelivery.map((restro)=>
                    restro.info.aggregatedDiscountInfoV3?
                    <OffersToBeDisplayed
                                                key={restro.info.id}
                                                heightOfDiv='h-[270px]'
                                                widthOfImg='w-[223px]'
                                                heightOfImage='h-[160px]'
                                                name={restro.info.name} 
                                                cuisines={restro.info.cuisines.length>3?restro.info.cuisines.slice(0,3):restro.info.cuisines}
                                                moreCuisines={restro.info.cuisines.length>3?'...':null}
                                                imageId={restro.info.cloudinaryImageId} 
                                                rating={restro.info.avgRatingString} 
                                                time={restro.info.sla.slaString} 
                                                locality={restro.info.locality} 
                                                areaName={restro.info.areaName}
                                                offers={restro.info.aggregatedDiscountInfoV3}   
                    />:
                        <TopRestaurantCard 
                                                key={restro.info.id}
                                                heightOfDiv='h-[270px]'
                                                widthOfImg='w-[223px]'
                                                heightOfImage='h-[160px]'
                                                name={restro.info.name} 
                                                cuisines={restro.info.cuisines.length>3?restro.info.cuisines.slice(0,3):restro.info.cuisines}
                                                moreCuisines={restro.info.cuisines.length>3?'...':null}
                                                imageId={restro.info.cloudinaryImageId} 
                                                rating={restro.info.avgRatingString} 
                                                time={restro.info.sla.slaString} 
                                                locality={restro.info.locality} 
                                                areaName={restro.info.areaName}
                                                offers={restro.info.aggregatedDiscountInfoV3}   
                        />
                    )
                }
            </div>
            </div>
        </div>
       
    )
}