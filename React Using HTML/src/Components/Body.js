import restruants from '../../Restraunts';
import RestroCards from './RestroCards'
import { useState } from 'react';



    

const Body=()=>{
    const[restroList,setRestroList]=useState(restruants);
    const filter=()=>(
        restruants=restruants.filter((restro)=>restro.info.avgRatingString>4.3)
        
    )
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