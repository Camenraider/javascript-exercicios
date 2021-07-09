/** Estrutura de repetição **/


// -------------- laço for -----------------------------------
var colors = ["black", "white","yellow", "green", "blue"];

for (var i=0; i < colors.length; i++) {
    console.log(colors[i]);
}

for (var i = 0; i <= 10; i++) {
    console.log(i);
}

// ------------------ laço while ---------------------------------

var i = 0;

while (i <= 10) {
    console.log(i);
    i++;
}

do {
    console.log(i);
    ++i;
} while (i <= 10);