import { Acomodacao, Cabecalho, Conteudo, Menu, Rodape } from "@/components/comp-interface"

export default function Botao(){
    // return Acomodacao()

    return (
        <div>
            <Cabecalho titulo = "AirBnb" subtitulo="Inicio" className="bg-gray-800"/>

            <Menu/>

            <Conteudo>
                <h1> Home </h1>
                <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis, expedita blanditiis maiores ea facilis alias corrupti laboriosam soluta, eveniet atque recusandae deleniti laborum asperiores fugiat dignissimos deserunt esse, quas sapiente.</p>
            </Conteudo>

            <Rodape/>


        </div>
    )
}