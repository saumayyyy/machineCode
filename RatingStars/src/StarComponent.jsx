import { useEffect, useState } from "react";


const StarComponent = ({starCount = 5})=>{

    const [starValue,setStarValue] = useState(0);
    const [HoverValue,setHoverValue] = useState(0);

    useEffect(()=>{
        console.log(starValue);

    },[starValue])

    const arr = new Array(starCount);
    arr.fill(0);
    return (
        <div>
            {arr.map((ele,index)=>{
                return <span key={index}
                onClick={()=>setStarValue(index+1)} 
                onMouseEnter={()=>setHoverValue(index+1)}
                onMouseLeave={()=>setHoverValue(0)}
                className={`text-3xl ${((HoverValue==0 && index<starValue) || index<HoverValue)?"text-yellow-500":""}`}
                >
                    
                    
                    
                    &#9733;
                </span>
            })}
        </div>
    )
}
export default StarComponent;