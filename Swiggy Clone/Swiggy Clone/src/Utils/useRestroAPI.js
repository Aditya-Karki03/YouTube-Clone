import { useState,useEffect } from "react";

export const useRestroAPI=(restroId)=>{
    
    const[multipleData,setMultipleData]=useState(null);
    // console.log(multipleData)

    useEffect(()=>{
        apiCallForFetchingMenus();
    },[])

    
    const apiCallForFetchingMenus=async()=>{
        const data= await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.1811818&lng=91.749661&restaurantId=${restroId}&catalog_qa=undefined&submitAction=ENTER`);
        const menuItems=await data.json();
        setMultipleData(menuItems.data.cards);
    }
    return multipleData;
}

