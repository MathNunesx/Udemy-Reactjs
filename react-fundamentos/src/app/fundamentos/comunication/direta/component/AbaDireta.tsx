import { useState } from "react";
import ConteudoDireta from "./conteudoDireta";


export default function AbaDireta (){

    const [aba, setAba] = useState('')
    
    return (
        <div>
            <button onClick={() => setAba('Chats')}> Chats </button>
            <button onClick={() => setAba('Updates')}> Updates </button>
            <button onClick={() => setAba('Calls')}> Calls </button>
            
             
            <ConteudoDireta nome={aba} />
        </div>
    )
}