import prompt from "prompt-sync";
let ler = prompt();





export function soma(num, mn) {
    console.log('me informe o primeiro numero:')
    let num = Number(ler())

    console.log('me informe o segundo numero:')
    let mn = Number(ler())
    let soma = num + mn
    return soma

}

