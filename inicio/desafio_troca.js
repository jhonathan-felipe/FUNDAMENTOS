let a = 7;
let b = 94;

let temporaria = b; // temporaria = 94
b = a; // b = 7
a = temporaria; // temporaria = 94

// [a , b] = [b , a] // Forma de trocar os valores de duas veriáveis, sem precisar criar uma terceira.


// depois da troca... a = 94 e b = 7

console.log(a);
console.log(b);