import { useEffect,useState } from "react";
import { useParams } from "react-router-dom"

export default function RestroMenu(){
    const[allMenus,setAllMenus]=useState([]);
    const { restroId } = useParams();
    
    useEffect(()=>{
        ListOfMenuAPICalling();
    },[])
    


    const ListOfMenuAPICalling=async()=>{
        const data=await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.1811818&lng=91.749661&restaurantId=${restroId}&catalog_qa=undefined&submitAction=ENTER`);
        const menus=await data.json();
        setAllMenus(menus.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards || menus.data.cards[2].groupedCard.cardGroupMap.cards[2].card.card.itemCards);

    }
    
    // const{ card }=allMenus.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card;
    console.log(allMenus)
   



    return(
        <div className="mt-[130px]">
            {/* <h1>{allMenus?.cards[0]?.card?.card?.info?.name}</h1> */}
           
            {/* <h2>{card.title}</h2> */}
                <ul>
                    <li>Gond Laddu</li>
                    {/* {
                            card.itemCards.map((item)=>
                                <li key={item.card.info.id}>{item.card.info.name}</li>
                            )
                    } */}
                </ul>
            <h2>Sweets</h2>
                <ul>
                    <li>Ras Gulab Jamun</li>
                    <li>Badam Anjir Bake</li>
                    <li>Besan Laddu</li>
                    <li>Badam Barfi</li>
                    <li>Badam Gulli</li>
                    <li>Banarasi Laddu</li>
                    <li>Kaju Anjir Chakra</li>
                </ul>
        </div>
    )
}
