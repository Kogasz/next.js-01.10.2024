"use client"
import React, { useState } from "react";

export default function Page(){
    
    const [bgc, setbgc] = useState("bg-slate-500")

    const handleClick = () => {
        setbgc(bgc == "bg-slate-500"? "bg-blue-500": "bg-slate-500")
}

    return(
    <div className={bgc + " h-screen flex flex-col items-center"}>
    <button className="border border-red-700" onClick={handleClick}>KOLOR</button>
    </div>
    );
}