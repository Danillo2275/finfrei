import prompt from "prompt-sync";
let ler = prompt();

let vetor = [];


for (let i = 0; i < 20; i++) {
  
  console.log(`Diga o ${i+1} numero`)
    vetor[i] = Number(ler ())
}

let soma = 0;
for (let i = 0; i < 10; i++) {yr
  soma += vetor[i];
}

console.log(vetor)
console.log(`A soma dos 10 primeiros elementos é: ${soma}`)
