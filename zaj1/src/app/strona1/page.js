"use client"
import React, { useState } from "react";

export default function Page(){
    
    const [licznik, setlicznik] = useState(0)

    const handleClick = () => {
        setlicznik(licznik + 1)
}

    return(
    <div>
    <button className="border border-red-700" onClick={handleClick}>Licznik ({licznik})</button>
    </div>
    );
}