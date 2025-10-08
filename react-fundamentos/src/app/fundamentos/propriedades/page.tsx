import { Acomodacao, Cabecalho, Menu } from "@/components/interface";
import "../app/globals.css"
export default function Page(){
    return(
        <div>
            <h1> Titulo Propriedades</h1>
        <Cabecalho titulo="São Roque, Brasil"
        preco= "R$350"/>
        <hr />
        <Acomodacao/>
        </div>
    )
}