"use client"
import React, { useState } from "react";

export default function Page(){
    
    const [input, setinput] = useState("")
    const [color,setcolor] = useState("")

    const handleClick = () => {
        setcolor(input)
        setinput("")
}

    return(
    <div className={color + " h-screen flex flex-col items-center"}>
    <input value={input} onChange={(e)=> setinput(e.target.value)}/>
    <button className="border border-red-700" onClick={handleClick}>Zmien</button>
    </div>
    );
}