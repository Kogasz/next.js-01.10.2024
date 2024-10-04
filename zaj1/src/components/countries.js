import Image from "next/image"
export default function Country({kraj}){

    return(
        <div className="pl-5 w-[200px]">
        <div className="border relative w-full h-[100px]">
        <Image
        src={kraj.flags.png}
        layout="fill"
        objectFit="cotain"
        />
        </div>
        <div className="border">
        <h1 className="font-bold text-center">{kraj.name.common}</h1>
        <ul className="pl-2"> 
            <li>{kraj.capital}</li>
            <li>{kraj.population}</li>
        </ul>
        </div>
        </div>
)
}