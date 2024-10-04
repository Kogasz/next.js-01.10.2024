"use client"
import Country from "@/components/countries";
import { useState,useEffect } from "react";

export default function Page(){

    const [data,setdata] = useState()


    useEffect(()=>{
        const getData = async ()=>{
            try{
                const respons = await fetch('https://restcountries.com/v3.1/all')
                const json = await respons.json()
                setdata(json)
            }
            catch(error){
                console.log(error)
            }
            finally{}
        }
        getData()
    },[])

    return(
        <div className="flex flex-wrap gap-2 items-center h-screen">
            {   data &&
                data.map((kraj,idx)=>
                    <Country key={idx} kraj={kraj}/>
                )
            }
        </div>
)
}