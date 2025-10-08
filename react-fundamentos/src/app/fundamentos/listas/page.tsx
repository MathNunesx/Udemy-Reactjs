// import "../../style.css"
import "@/app/style.css"
export default function Page(){
   
    const usuarios = [
        { id: 1, nome: " Rick", email: "rick.com"},
        { id: 2,nome: " Anakin", email: "anakin.com"},
        { id: 3, nome: " Harry ", email: "harry.com"},
        { id: 4, nome: " Natasha", email: "natasha.com"},
        { id: 5, nome: " Percy", email: "percy.com"}
          
        
    ]

    const lista = usuarios.map(
        usuario => <li key={usuario.id}> {usuario.nome} ({usuario.email})</li>
    )

    return(
        <ul>
            {lista}
        </ul>
    )
}