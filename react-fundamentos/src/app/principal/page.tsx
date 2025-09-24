function Acomodacao(){
    return (
        <div>
    <span> -- Imagem Acomodação --</span>
     <h1> São Roque, Brasil</h1>
     <p>Desc. Perto da Vinicula Goes</p>
     </div>
    )
}

export default function Page(){
    // return Acomodacao()

     const nome = `Roland`
    return (
        <div>
         {Acomodacao()}
         <hr />
         {Acomodacao()}
        <hr />
        {nome}
        </div>
    )
}