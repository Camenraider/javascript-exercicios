// criando um objeto
const pessoa = {
    nome: "Paulo",
    idade: 41,
    cidade: "Araçatuba"
}

// Notação de ponto
console.log(pessoa.nome) // retorna o nome

// Notação de colchetes
console.log(pessoa['idade']) // retorna a idade

// Como desestruturar Objetos
const {nome, idade, cidade} = pessoa
console.log(nome) // retorna o nome sem usar pessoa
console.log(idade)
console.log(cidade)

const filmes = [
    {
        id: 1,
        titulo: "Dilema das Redes",
        descricao: "Um documentário sobre tecnologia.",
        duracao: 120
    },
    {
        id: 2,
        titulo: "Us",
        descricao: "Um filme de terror legal demais.",
        duracao: 120
    },
    {
        id: 1,
        titulo: "Corra",
        descricao: "Um filme de suspense bem legal.",
        duracao: 120
    },
]

const [{id, titulo, descricao, duracao}] = filmes

filmes.map(filme => console.log(filme.descricao))