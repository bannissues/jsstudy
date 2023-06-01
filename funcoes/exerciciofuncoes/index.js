let option
let base
let altura
let lado
let area

do {
  let option = prompt("olá! gostaria de fazer qual cálculo?\n" +
                      "\n1 - área do triangulo" +
                      "\n2 - área do retângulo" +
                      "\n3 - área do quadrado" +
                      "\n4 - área do trapézio" +
                      "\n5 - área do círculo" +
                      "\n6 - sair.")

switch (option) {
  case 1:
    base = prompt("qual o tamanho da base do triângulo?")
    altura = prompt("qual a altura do triângulo?")

    function triang() {
    area = (base * altura) / 2
    }

    triang()

    window.alert("o valor da área do triângulo é de " + area )
    break
    
  case 2: 
    base = prompt("qual o tamanho da base do retângulo?")
    altura = prompt("qual a altura do retângulo?")

    triang()*2

    window.alert("o valor da área do retângulo é de " + area)
}
} while (option = 6)