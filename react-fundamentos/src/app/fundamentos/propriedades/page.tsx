import { Acomodacao, Cabecalho, Menu } from "@/components/interface";

export default function Page(){
    return(
        <div>
        <Cabecalho titulo="São Roque, Brasil"
        preco= "R$350"/>
        <hr />
        <Acomodacao/>
        </div>
    )
}