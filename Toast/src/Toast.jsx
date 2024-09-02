import { useState } from "react";


const Toast = ()=>{

    const [list,setList] = useState([]);

    const addHandler = (text,type)=>{
        const id =Date.now();
        const newToast = [...list,{id,text,type}];
        setList(newToast)
        setTimeout(()=>removeHandler(id),5000);
    }

    const removeHandler = (id)=>{
        setList((prevlist)=>{
            const filteredArr = prevlist.filter((toast)=>{
                return toast.id!==id;
            })
            return filteredArr;
        });
    }

    return <div className="w-screen h-screen relative">

        <div className="fixed top-10 right-20">
            {
                list.map(({id,text,type})=>(
                    <div  key={id} className={`${type} h-[40px] w-[200px] text-xl flex justify-between p-4 items-center border-2 rounded-lg toast`}>
                        {text} <span className="cursor-pointer" onClick={()=>removeHandler(id)}>x</span>
                    </div>
                ))
            }
        </div>

        <div className="flex justify-center items-center absolute top-[50%] left-[35%] gap-4">
            <button className="p-2 bg-slate-300 rounded-md border-2"
            onClick={()=>addHandler("Success","bg-green-300")}>Success</button>
            <button className="p-2 bg-slate-300 rounded-md border-2"
            onClick={()=>addHandler("Warning","bg-orange-400")}>Warning</button>
            <button className="p-2 bg-slate-300 rounded-md border-2"
            onClick={()=>addHandler("Info","bg-yellow-300")}>Info</button>
            <button className="p-2 bg-slate-300 rounded-md border-2"
            onClick={()=>addHandler("Error","bg-red-400")}>Error</button>
        </div>
        
    </div>
}
export default Toast;