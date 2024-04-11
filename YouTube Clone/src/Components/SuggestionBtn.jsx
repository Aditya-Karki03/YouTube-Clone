// import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black",paddingTop:'2px',borderRadius:'50%' }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black",paddingTop:'2px',borderRadius:'50%' }}
      onClick={onClick}
    />
  );
}


export default function SuggestionBtn(){
    const btnOptions=['All','Music','News','Mixes','Computer Science','Bollywood Music','Indian pop music','Soundtracks','Indie Music','Cars','Comedy','Rock Music'];
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 8,
        slidesToScroll: 3,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
      };
    return(
        <div className="z-[8] shadow-xl mt-20 ml-20 py-1 px-9 h-8 sticky top-16  bg-white">
            <Slider {...settings}>
               {
                 btnOptions.map((items)=>  <button className="px-2 py-1 transition-all text-[13px] rounded-lg hover:bg-[lightgray] whitespace-nowrap" key={items}>{items}</button>)
               }
                
            </Slider>
        </div>
    )
}



