import { Acomodacao, Cabecalho, Menu } from "@/components/interface"

export default function Botao(){
    // return Acomodacao()

    return (
        <div>
         {Cabecalho() }
  
         <hr />
         {Acomodacao()}
        <hr />
        </div>
    )
}