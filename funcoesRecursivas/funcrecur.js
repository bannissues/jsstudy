//é uma função que chama ela mesma
function split(num){
    console.log(num)
    if(num % 2 === 0) {
        split(num / 2)
    } else {
        return num
    }
}

split(40) // 40 - 20 - 10 - 5

function twice(num){
    console.log(num)
    if (num <= 1000) {
twice(num * 2)
    } else{
        console.log('tá bão de número já')
    }
} //isso travaria meu computador.

function fatorial(num){
    console.log(num)('number: ' + num)
    if (num === 0){
        return 1
    } else if (num === 1) {
return 1
    } else {
        console.log(num + " * !" + (num - 1) )
    } return num * fatorial(num - 1)
}
