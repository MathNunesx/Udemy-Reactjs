import Image from "next/image"

export default function Page(){

    const usuario = {
        nome: "Glauber Dadario",
        urlPerfil: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnGUKEObKP7a2L1helo1SZY1HLowd4ACTvqw&s"
    }
    return(
        <div>
        <h1> Imagens </h1>
        <Image 
        src={"/img/windows=img.jfif"}
        alt={"Nome:" + usuario.nome}
        width={300}
        height={300}
        />

        {/* <img
        //  src={usuario.urlPerfil}
        src= "/img/windows-img.jfif"
        alt={"Nome:" + usuario.nome}
        /> */}
        </div>
    )
}