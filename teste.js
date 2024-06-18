import prompt from "prompt-sync";
let ler = prompt();

console.log('me informe qual numero da tabuada que vc quer saber:')
let vsz = Number(ler())

console.log('me informe o outro numero da tabuada que vc quer saber:')
let cont = Number(ler())

let total= vsz * cont

console.log(`o total é ${total} `)

