/** funções javascript **/

function sayhello(name, lastName) {
    console.log("Hello, "+ name + ' ' + lastName);
}

sayhello("Nicolas", "Cage");

//----------- função de soma ---------------------------------
function sum(a,b){
    return a + b;
}

console.log(sum(30, 47));

//----------- arrow function -----------------------------------
var ola = () => {
    console.log("Hello World");
}