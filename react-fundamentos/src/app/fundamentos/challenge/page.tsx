'use client'
import { useState } from "react"

export default function Entrada(){

     
    return(
        <div className="p-10">
            <h1> Cálculo IMC </h1>
            <hr />

            <p>Digite o seu peso</p>
            <input 

            placeholder="ex: 90"
            className="campo-text"
             type="text"
             /> KG
             <br />

             <p>Digite a sua altura</p>
            <input 

            placeholder="ex: 1.85"
            className="campo-text"
             type="text"
             /> Metros
             <br /> <br /> <br />

             <button className="botao">
                 Calcular
                  </button>
                  <br />

                  <span> Resultado: </span>

        </div>
    )
}