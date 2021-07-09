/** exercicíos básicos **/
// Divisivel por 3 => 'FIZZ'
// Divisivel por 5 => 'Buzz'
// Divisivel por 3 e 5 => 'FizzBuzz'
// Se não for um número divisivel nem por 3 e nem por 5 => Entrada
// Se não for um número => não é um número

function fizzBuzz(entrada) {
    if (typeof entrada != 'number')
        return 'Não é um número';
    if (entrada % 3 === 0 && entrada % 5 === 0)
        return 'FizzBuzz';
    if (entrada % 3 === 0)
        return 'Fizz';
    if (entrada % 5 === 0)
        return 'Buzz';

        return entrada;
}

let resultado = fizzBuzz(10);
console.log(resultado);

// reverse a string

function reverseString(str) {
    var newStr = '';
    for (var i = str.length - 1; i >= 0; i--)
        newStr += str[i];
    return newStr;
  }
  let result2 = reverseString('Gama Academy')
  console.log(result2)



// Convert Celsius to Fahrenheit

function converToFahrenheit(value) {
    return value * 1.8 +32
}

let result = converToFahrenheit(1)
console.log(`O valor em Fahrenheit é ${result}`)

