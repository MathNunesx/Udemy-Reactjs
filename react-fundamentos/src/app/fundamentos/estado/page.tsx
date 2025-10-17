'use client'

import { useState } from "react"

export default function Page(){

    // let num = 0

    let [num, setNumero] = useState(0)
    function incrementar(){
        // num += 1
        setNumero( num + 1 )
        // console.log("numero: "+ num)
    }

    function decrementar(){
        // num += 1
        setNumero( num - 1 )
        // console.log("numero: "+ num)
    }
    return(
            <div>
                <h1> Estados </h1>
                <button 
                onClick={incrementar}
                className="bg-blue-950 p-2"> Adicionar
                </button> <br></br>

                <button 
                onClick={decrementar}
                className="bg-blue-950 p-2"> Diminuir
                </button>

                <p>Número: {num}</p>
            </div>
    )
}