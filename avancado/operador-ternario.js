// Operador ternário
//
// if...else
/*
function calcularIdade(idade){
    if (idade >= 18) {
        return 'Maior de idade'
    } else {
        return 'Menor de idade'
    }
}
console.log(calcularIdade(18))
*/


function calcularIdade(idade){
    return idade >= 18 ? 'Maior de idade' : 'Menor de idade';
}
console.log(calcularIdade(15))