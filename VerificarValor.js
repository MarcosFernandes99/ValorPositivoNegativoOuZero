// Faça uma função que recebe um valor inteiro e verifica se o valor é positivo, negativo ou zero. A função deve retornar 1
// para valores positivos, -1 para valores negativos e 0 para o valor 0.

VerificarValor();

function VerificarValor(){
    var numero = prompt(`Digite um valor inteiro`)
    

    if(numero > 0){
        resultado = 1
             tipoNumero = "positivo"
    }
    else if(numero < 0){
        resultado = -1
        
    }
    else{
        resultado = 0
        
    }    
    
    return console.log(`O resultado é: ${resultado}`)
}