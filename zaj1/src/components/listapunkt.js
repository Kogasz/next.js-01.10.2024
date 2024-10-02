export default function ListaPuntowana({owoce}){
    return(
        <div className="border border-red-600 w-[200px] text-center">
        <ul>
            {owoce.map((owoc,index)=>(
                <li key={index}>{owoc}</li>

            ))}
        </ul>
        </div>
    );
}