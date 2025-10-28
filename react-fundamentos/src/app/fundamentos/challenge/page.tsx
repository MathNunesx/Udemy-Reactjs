'use client'
import { useState } from "react"

export default function Entrada(){

    const [peso, setPeso] = useState('')
    const [altura, setAltura] = useState('')
    const [resultado, setResultado] = useState('')

    function calcularImc(){
        const  p = parseFloat(peso)
        const  a = parseFloat(altura)

        const imc = p / (a * a)

        if(imc <= 18 ){
            setResultado("Abaixo do peso")
        } else if(imc > 18 && imc < 25){
            setResultado("Peso Normal")
        } else {
            setResultado("Acima do Peso")
        }

    }

     
    return(
        <div className="p-10">
            <h1> Cálculo IMC </h1>
            <hr />

            <p>Digite o seu peso</p>
            <input 

            value={peso}
            onChange={e=>setPeso(e.target.value)}
            placeholder="ex: 90"
            className="campo-text"
             type="text"
             /> KG
             <br />

             <p>Digite a sua altura</p>
            <input 

            value={altura}
            onChange={e=>setAltura(e.target.value)}
            placeholder="ex: 1.85"
            className="campo-text"
             type="text"
             /> Metros
             <br /> <br /> <br />

             <button 
             onClick={calcularImc}
             className="botao">
                 Calcular
                  </button>
                  <br />

                  <span> Resultado: {resultado}</span>

        </div>
    )
}