import { useEffect,useState } from "react";
import { Shimmer } from "./Shimmer";

export default function RestroDetails(){
    const[details,setDetails]=useState(null);

    const callTheApI=async ()=>{
        const data=await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.1811818&lng=91.749661&restaurantId=362337&catalog_qa=undefined&submitAction=ENTER`);
        const json=await data.json();
        setDetails(json);
        
    }
    useEffect(()=>{
        callTheApI();
    },[])
    if(details===null){
        return <Shimmer/>
    }
    //console.log(details.data.cards[2].card.card.info.name);
    // const{card}=details.data.cards[2].card.card
    // const{details.data.cards[2].card.card.info}=details;

  
    //cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards[]
    // .card.info.name
    // console.log(details.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[3].card.card.categories[0].itemCards[0].card.info.name)



    const[categories]=details.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[3].card.card.categories;
    console.log(categories.itemCards)
    return(
        <div className='details-container'>
            <h1>{details.data.cards[2].card.card.info.name}</h1>
            <h2>{details.data.cards[2].card.card.info.city}</h2>
            <h2>Average Rating: {details.data.cards[2].card.card.info.avgRating}</h2>
            {
                categories.itemCards.map(cards=>{
                    return(
                        <li key={cards.card.info.id}>{cards.card.info.name}</li>
                    )
                })
            }
            
            
        </div>
    )
}