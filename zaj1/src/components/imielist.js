export default function ImieList({imie, ok}){

    var clasName = ""
    if(ok){
       clasName="border bg-green-500 border-red-600 w-[200px] text-center"
    }
    else{
       clasName="border border-red-600 w-[200px] text-center"
    }

    return(
        <div className={clasName}>
        <p>{imie}</p>
        </div>
    );
}