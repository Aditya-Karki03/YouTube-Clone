import RestroCards from "./RestroCards";
import { Shimmer } from "./Shimmer";
import { useEffect,useState } from "react";
import { Shimmer } from "./Shimmer";
import { Link } from "react-router-dom";

const Body=()=>{
    const[restroList,setRestroList]=useState([]);
    const[filtredRestro,setFilteredRestro]=useState([]);
    const[inp,setInp]=useState('')
    useEffect(()=>{
        
        ApiCall();
    },[]);

    const ApiCall=async()=>{
        
        const data=await fetch(`https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.1811818&lng=91.749661&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`);
        const json=await data.json();
        // console.log(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setRestroList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestro(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        
        // console.log(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    const clickHandler=()=>{
        // setFilteredRestro
        const filter=restroList.filter((rest)=>{
            return rest.info.name.toLowerCase().includes(inp.toLowerCase())
        })
        setFilteredRestro(filter)
    }

    return(
       <div className="restro-input-container">
            <div className="input-container">
                <input type="text" placeholder="Search Restro"  onChange={(e)=>setInp(e.target.value)} />
                <button onClick={clickHandler}>Submit</button>
            </div>
            <div className="restro-container">
                    {
                        console.log(filtredRestro.length==0)
                    }                
                    {
                        filtredRestro.length===0||restroList.length===0?<Shimmer/>:filtredRestro.map((rest)=>(
                            <Link to={'/restroDetail/'+rest.info.id} key={rest.info.id}>
                                <RestroCards
                            
                            imageURL={'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/'+rest.info.cloudinaryImageId}
                            restroName={rest.info.name}
                            address={rest.info.locality+rest.info.areaName}
                            rating={rest.info.avgRating}
                            time={rest.info.sla.slaString}
                            />
                            </Link>
                        ))
                    }
                
            </div>
       </div>
    )
}
export default Body;