"use client"
import React, { useState } from "react";

export default function Page(){
    
    const [h, seth] = useState("")
    const [input, setinput] = useState("")

    const handleClick = (e) => {
        seth(input)
        setinput("")
}

    return(
    <div className="h-screen flex flex-col items-center">
    <input value={input} onChange={(e)=> setinput(e.target.value)}/>
    <button className="border border-red-700" onClick={handleClick}>Zmien</button>
    <h1>{h}</h1>
    </div>
    );
}