'use client'
import { useState } from "react"

export default function Entrada(){

     const [valor, setValor] = useState('')

     function alterarValor(e: any){
        console.log(e)
        setValor(e.target.value)
     }

     
    return(
        <div className="p-10">
            <h1> Entrada de Dados</h1>
            <input 
            value={valor}
            className="campo-text"
            // onChange={e => setValor( e.target.value)}
            onChange={alterarValor}
             type="text"
             
              />

              <h4> Valor digitado: {valor}</h4>
        </div>
    )
}