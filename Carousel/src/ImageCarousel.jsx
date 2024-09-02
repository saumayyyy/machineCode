import { useEffect, useRef, useState } from "react";

import data from "./data.json";

const ImageCarousel = () => {
    const [index,setIndex] = useState(0);

    const reference = useRef(null);

    const handlenext = ()=>{
        setIndex((c)=>{
            console.log(c);
            if(c === data.length-1){
                return 0;
            }
            else return c+1;
        })
    }

    useEffect(()=>{
        reference.current = setInterval(handlenext,2000);
        
    },[])

    const handlePrev = ()=>{
        if(index == 0){
            setIndex(data.length - 1);
        }
        else setIndex(index-1);
    }

  return (
    <div className="relative w-full h-full"  onMouseEnter={()=>
        {clearInterval(reference.current)}} 
    onMouseLeave={()=>{
        reference.current = setInterval(handlenext,2000);
    }}>

        <div className="w-full h-full -z-10 image-container">
            <img src={data[index].download_url} className="w-full h-full image-slide"
           />
        </div>
        <button className="z-10 absolute top-[50%] left-10 bg-white p-4 rounded-full h-24 w-24 "  onClick={handlePrev}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10 mx-auto">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" 
           />
            </svg>
        </button>
        <button className="z-10 absolute top-[50%] right-10 bg-white p-4 rounded-full h-24 w-24" onClick={handlenext}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-10 mx-auto">
            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" 
            />
            </svg>
        </button>
      
    </div>
  )
};

export default ImageCarousel;
