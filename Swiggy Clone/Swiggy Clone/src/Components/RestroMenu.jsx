import { useEffect,useState } from "react";
import { useParams } from "react-router-dom"
import ShimmerForWhatsOnYourMind from "./ShimmerForWhatsOnYourMind";


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
    const{name}=multipleData[0]?.card?.card?.info;
    const{cards}=multipleData[2]?.groupedCard?.cardGroupMap?.REGULAR;
    const recommended=cards.filter((item)=>item.card.card.title=='Recommended');
    
    // let itemCards=[]
    // if(recommended) itemCards=recommended[0].card.card;
    // console.log(itemCards)
    const {itemCards}=recommended[0].card.card;
    console.log(itemCards)
    
//     console.log(multipleData[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card);
// console.log(multipleData[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card);



    return (
        <div className="mt-[130px]">
            <h1>{name}</h1>
            <h2 className="font-bold">Recommendation</h2>
       
            <ul>
                
                {
                    itemCards.map((item)=>
                        <li key={item.card.info.id}>
                            {item.card.info.name}
                        </li>
                    )
                }
            </ul>
        
    </div>
    )
}