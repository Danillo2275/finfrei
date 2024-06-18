import prompt from 'prompt-sync';
let ler = prompt();

console.log("me fale um numero:")
let nm = Number(ler())

let a = [1,2,3,4,5,6,7,8,9,10]
console.log(a)

for(let i = 2; i <=nm; i += 2) {
    console.log(i)
}