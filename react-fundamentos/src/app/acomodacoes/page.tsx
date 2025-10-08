import { Acomodacao, Cabecalho, Conteudo, Menu, Rodape } from "@/components/interface"

export default function Botao(){
    // return Acomodacao()

    return (
        <div>
            <Cabecalho titulo = "AirBnb" subtitulo="Minhas acomodações"/>

            <Menu/>

            <Conteudo titulo= "teste">
                <h1> Página de Acomodações </h1>
                <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis, expedita blanditiis maiores ea facilis alias corrupti laboriosam soluta, eveniet atque recusandae deleniti laborum asperiores fugiat dignissimos deserunt esse, quas sapiente.</p>
            </Conteudo>

            <Rodape/>


        </div>
    )
}