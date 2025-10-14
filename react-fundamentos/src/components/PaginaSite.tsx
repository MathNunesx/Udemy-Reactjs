import { Cabecalho, Conteudo, Menu } from "./comp-interface";

export default function PaginaSite(props:any){
    return(
        <div>
            <Cabecalho
            titulo={props.titulo}
            subtitulo={props.subtitulo}
            className="bg-blue-950"
            />

            <Menu/>

            <Conteudo>
                {props.children}
            </Conteudo>
        </div>
    )
}