import prompt from "prompt-sync";
let ler = prompt()

let a = []

let tam = 10

let nm=[]


for (let i = 0;i<tam;i++){
 console.log(`Diga os numeros do Array `)

 a[i]= Number(ler())

 if (a[i]% 2 ==0){  
       nm[i] = a[i]
 }

}
console.log(nm)