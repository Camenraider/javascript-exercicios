const alunasGama = ["Paula", "Maria", "Estela", "Clara"]
// Acessar informações do array
console.log(alunasGama[3]) // retorna valor Clara

// Operador spread (...)
const alunasXp = [...alunasGama, "Simara"]

console.log(alunasXp)


// Metos de iteração
for (let i=0; i <= alunasGama.length; i++){
    console.log(alunasXp[i])
}

// Metodo Map
alunasXp.map(aluna => console.log('/n'+ aluna))

// metodo filter
const numeros = [65, 6, 87, 96, 12, 55]
// impares 
const numerosImpares = numeros.filter(numero => numero % 2 != 0)
console.log(`números impares ${numerosImpares}`)
// pares
const numerosPares = numeros.filter(numero => numero % 2 == 0)
console.log(`números pares ${numerosPares}`)

// usando arrow function dentro do metodo sort
const numerosOrdenadosCrescente = numeros.sort((a,b)=>a-b)
console.log(numerosOrdenadosCrescente)

const numerosOrdenadosDecrescente = numeros.sort((a,b)=> b-a)
console.log(numerosOrdenadosDecrescente)

// reduce - reduz um array a um resultado de uma operação matemática
const numbers = [1,34,35]
const soma = numbers.reduce((valorAnterior, valorAtual) => {
    return valorAnterior + valorAtual
},5) // + 5

console.log(soma) // 75