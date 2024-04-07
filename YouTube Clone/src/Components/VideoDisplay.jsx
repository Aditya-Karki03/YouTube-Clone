import { useLocation, useParams } from "react-router-dom"
import { FaRegUser } from "react-icons/fa";
import { useState } from "react";

export default function VideoDisplay() {
    const[subscribe,setSubscribe]=useState(false)
    const[showMore,setShowMore]=useState(false);
    const params=useParams();
    const{id}=params;
    // console.log(id)
    const location=useLocation();
    const{title,description,channelTitle}=location.state.itemName.snippet;
    // console.log(snippet)

    function handleSubscribe(){
        setSubscribe(!subscribe);
    }

    function handleShowMore(){
        setShowMore(!showMore)
    }
    
    return(
        <div className="px-8 mt-20 border  flex justify-center ">
            <div className=" aspect-video w-7/12 border  ">
                <iframe  className="w-full h-full" src={`https://www.youtube.com/embed/${id}?si=3jki0qHFa_ayeGtR`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen='true'></iframe>
                <div className="flex flex-col gap-2">
                    <p className="font-bold text-[19px] ">{title}</p>
                    <div className="flex items-center gap-2">
                        <div className="h-[40px] w-[40px] flex justify-center items-center hover:bg-[lightgray] rounded-full">
                            <FaRegUser className="h-[25px] w-[25px]" />
                        </div>
                        <p className="font-semibold">{channelTitle}</p>
                        <button onClick={handleSubscribe} className="ml-3 border border-black px-3 py-1 rounded-r-full rounded-l-full">{subscribe?'Subscribed ✅':'Subscribe'}</button>
                    </div>
                    <div className="bg-[lightgray] p-2 rounded-lg ">
                        <p className="">{showMore?description.substring(0):description.substring(0,200).concat('...')} <button className="font-bold " onClick={handleShowMore}>{showMore?'Less':'More'}</button> </p>
                    </div>
                </div>
            </div>
            <div className="w-5/12 border border-red-600"></div>
        </div>
    )
}