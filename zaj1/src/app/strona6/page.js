"use client"
import React, { useState } from "react";

export default function Page(){
    
    const [input,setinput] = useState("")
    const [list,setlist] = useState(["test1"])

    const handleClick = (e) =>{
        setlist([...list,input])
        setinput("")
    }
    return(
        <div>
            <input value={input} onChange={(e)=>setinput(e.target.value)}></input>
            <button onClick={handleClick}>DODAJ</button>
            <ul>
            {list.map((listas,idx)=>(
                <li key={idx}>{listas}</li>
            ))}
            </ul>
        </div>
    );
}