import { useState } from "react";
import ConteudoDireta from "./conteudoIndireta";

interface AbaProps{
    atualizar(nome: string): void
}
export default function AbaIndireta (props: AbaProps){

   
    
    return (
        <div>
            <button onClick={() => props.atualizar('Chats')}>Chats</button>
            <button onClick={() => props.atualizar('Updates')}>Updates</button>
            <button onClick={() => props.atualizar('Calls')}>Calls</button>
        </div>
    )
}