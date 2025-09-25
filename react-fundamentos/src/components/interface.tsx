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
export function Cabecalho(){
    return (
        <div className="bg-blue-900">
            <h1>Logo</h1>
            {Menu()}
        </div>
    )
}

