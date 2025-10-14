import Link from "next/link"

interface CabecalhoProps{
    titulo: string
    subtitulo: string
    className: string

}

interface ConteudoProps{
    children: any

}

export function Acomodacao(){
    return (
        <div>
    <span> -- Imagem Acomodação --</span>
     <h1> São Roque, Brasil</h1>
     <p>Desc. Perto da Vinicula Goes</p>
     </div>
    )
}

export function Menu(){
    return (
        <div className="bg-gray-500">
            
                <MenuItem texto="Home" url="/inicio"/>
                <MenuItem texto="Acomodações" url="/acomodacoes"/>
                <MenuItem texto="Ajuda" url="/inicio"/>
        </div>
    )
}

export function MenuItem(props: any){
    return (
        <Link href={props.url}className= "p-2"> 
            {props.texto}
        </Link>
    )
}
export function Cabecalho(props: CabecalhoProps){
            const classe = props.className ?? ""

    return (
        <div className={"p-3 " + classe}>
            <p>{props.titulo}</p>
            <p>{props.subtitulo}</p>
        </div>
    )
}
export function Rodape(){
    return (
        <div className="bg-blue-900">
            <p>Rodapé</p>
        </div>
    )
}
export function Conteudo(props: ConteudoProps){
   console.log(props)
    return (
        <div className="bg-gray-900">
            {props.children}
        </div>
    )
}

