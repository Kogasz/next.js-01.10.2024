"use client"
import React, { useState } from "react";

export default function Page(){
    
    const [start, setstart] = useState("START")

    const handleClick = () => {
        setstart(start == "START"? "STOP": "START")
}

    return(
    <div className="flex flex-col items-center justify-center gap-2">
    <button className="border border-blue-700" onClick={handleClick}>{start}</button>
    </div>
    );
}