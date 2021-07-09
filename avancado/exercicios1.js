// Imprima na tela os números pares existentes entre 0 e 100
for(let i = 0; i <= 100; i++){
    if(i % 2 === 0 ){
        console.log(i);
    }
}
/*
// Crie um algoritimo que receba três notas de um aluno, 
// calcule sua média e mostre as seguintes mensagens de acordo com cada situação:
// - Se a média for igual ou maior que 7 - Aprovado
// - Se a média for maior e igual a cinco e menor que 7 - Recuperação
// - Se a média for menor que 5 - Reprovado |
*/

function calcularMedia(nota1, nota2, nota3){
    let media = (nota1 + nota2 + nota3)/3

    if(media >=7){
        return 'Aprovado'
    } 
    if(media >= 5 && media < 7) {
        return 'recuperação'
    } 
    if(media < 5) 
    return 'Reprovado'
}

console.log(calcularMedia(5,3,9))