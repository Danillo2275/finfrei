import prompt from "prompt-sync";
let ler = prompt();


let num = []
 
console.log('me informe 5 numeros')
let inf = Number(ler())


for (let cont = 0 ; cont < num; cont++  ){
    console.log('os numeros sao' + inf)
   num[cont] = Number(ler()) 
}

console.log('sao')
for(let item of num){
    console.log(item)

}

console.log()
console.log('os numeros sao ' + inf)
