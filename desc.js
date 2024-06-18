import prompt from "prompt-sync";
let ler = prompt();

console.log('me informe o valor da conmpra:')
let tt = Number(ler())

console.log('me informe quanto de desconto vc tem?')
let des = Number(ler())

let total =  tt - des

console.log(`o seu desconto e de ${total}` )

