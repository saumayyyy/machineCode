import { useEffect, useState } from "react";
import axios from "axios";

const STATE = {
  Loading:'Loading...',
  Error:'Error',
  Success:'Success'
}

const App = ()=>{

  const [query, setQuery] = useState("");
  const [result,setResult] = useState([]);
  const [status,setStatus] = useState(STATE.Loading);

  useEffect(()=>{

    const abortContoller = new AbortController();
    const {signal} = abortContoller;
    const fetchData = async ()=>{
      setStatus(STATE.Loading)
      try {
        console.log("API Call");
        const res = await axios.get(`https://dummyjson.com/products/search?q=${query}&limit=5`
          ,{signal}
        );
        setResult(res.data.products);
        setStatus(STATE.Success);
      } catch (error) {
        if(error.name !== "AbortError"){
          setStatus(STATE.Error)
        }
      }
    };
    const timerId = setTimeout(fetchData,500);
    return ()=>{
      clearTimeout(timerId);
      abortContoller.abort();
    };
  },[query]);

  return <div className="w-full flex flex-col justify-center items-center">
    <div className="flex flex-col gap-10 items-center justify-center w-[60%]">
      <label htmlFor="searchBar">Search</label>
      <input type="text" name="searchbar" id="searchBar"
      className="border-2 border-blue-400 w-full"
      onChange={(evt)=>setQuery(evt.target.value)} value={query}/>
    </div>
    {status!==STATE.Success?
    <div>{status}</div>:
    <div className="">
      {result.map((product)=>(
        <div key={product.id}>{product.title}</div>
      ))}
    </div>}

  </div>
}

export default App;