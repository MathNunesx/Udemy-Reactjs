export default function Page(){


    const rule = <h1>Maior de idade</h1>
    const nome = 'Matheus Nunes'

    const lista = [
        <h1> Vader</h1>,
        <h1> Anakin</h1>,
        <h1> Luke</h1>
    ]

    let salario = 2000
    let bonus = 200

    const user = {
        nome: 'Leya',
        idade: '20'
    }
    
    return(
        <div>
            hi, {lista}
            O slario é: {salario + bonus} <br />
            O usuário é: {user.nome} idade: {user.idade}
        </div>
    )
}