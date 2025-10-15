'use client'

export default function Page(){

    let num = 0
    function incrementar(){
        num += 1
        console.log("numero: "+ num)
    }
    return(
            <div>
                <h1> Estados </h1>
                <button 
                onClick={incrementar}
                className="bg-blue-950 p-2"> Click here
                </button>

                <p>Número: {num}</p>
            </div>
    )
}