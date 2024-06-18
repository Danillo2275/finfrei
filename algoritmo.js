import prompt from "prompt-sync";
let ler = prompt();

console.log("me informe um numero:")
let num = Number(ler())

let al =[ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 , 13, 14, 15]
console.log(al)

for(let n = 1; n <=al ; n +=1){
    console.log(n)
}