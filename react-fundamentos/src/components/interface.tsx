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
        <div className="bg-blue-950">
            Acomodações | Experiencias 
        </div>
    )
}
export function Cabecalho(props: any){
    return (
        <div className="bg-blue-900">
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
export function Conteudo(props: any){
   console.log(props)
    return (
        <div className="bg-gray-900">
            {props.children}
        </div>
    )
}

