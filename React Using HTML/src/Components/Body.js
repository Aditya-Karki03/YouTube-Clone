import restruants from '../../Restraunts';
import RestroCards from './RestroCards'
import { useState,useEffect } from 'react';


//data.cards.card.card.gridElements.infoWithStyle.restaurants
    

const Body=()=>{
    const[restroList,setRestroList]=useState([]);
    const filter=()=>(
        restruants=restruants.filter((restro)=>restro.info.avgRatingString>4.3)
        
    )
    const apiCall=async()=>{
        const data=await fetch(`https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.1811818&lng=91.749661&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`);
        const json=await data.json();
        setRestroList(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        // console.log(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
           // );
    }
    useEffect(()=>{
        apiCall();
    },[])
    if(restroList.length===0){
       return <h1>Loading....</h1>
    }
    return (
        <div className='restaurants'>
            
        <button onClick={()=>setRestroList(filter())} style={{height:'40px', margin:'20px'}}>Highly Rated</button>
       
        {
             restroList.map((restro)=>(
                <RestroCards 
                key={restro.info.id}
                imageURL={'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/'+restro.info.cloudinaryImageId}
                restroName={restro.info.name}
                address={restro.info.locality+restro.info.areaName}
                rating={restro.info.avgRating+'stars'}
                time={restro.info.sla.deliveryTime}
                />
            ))
        }

    </div>
    )
}
export default Body;