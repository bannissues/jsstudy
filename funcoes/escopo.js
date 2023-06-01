// escopo é o contexto onde a variável foi declarada, podendo ser mais interno ou externo.
let olimpusGods = "Zeus"

function nextBless() {
  olimpusGods = "Poseidon"
}

console.log(olimpusGods) // -> Zeus
nextBless()
console.log(olimpusGods) // -> Poseidon

// as variáveis declaradas no escopo mais externo podem ser utilizadas em escopos internos livremente

function arthurMrgn() {
  let talkTo = "you're alright giirrll!"
}

arthurMrgn()
console.log(talkTo) // uncaught referenceError: talkTo us not defined.

// variáveis declaradas internamente não podem ser utilizadas/não existem no escopo externo (existem exceções)

function reviewGrades(grade) {
  if (grade > 60) {
    var approved = true
    let situation = "approved"
  } else {
    var approved = false
    let situation = "disapproved"
  }
}

console.log(grade) // essa variável deu certo nas duas situações abaixo, por estar dentro da função em si
console.log(approved) /* por ser uma variável tipo VAR (antiga e quase inutilizada), deu certo, 
pois o var pode ser utilizado em qualquer lugar, sendo interno ou externo. isso pode confundir a leitura do código.*/
console.log(situation) // deu erro de indefinição, por ser uma variável LET declarada internamente.

reviewGrades(80)
reviewGrades(38)

function hello () {
  var text = "hello, world!"
}

console.log(text) /*-> erro de indefinição. a variável VAR só pode ser confundida nos escopos quando está em blocos como IF, 
ELSE e outros. dentro de uma função, ela não é reconhecida externamente. NÃO USE VAR!!!*/ 



console.log(nome) // undefined - uma variável VAR, quando criada, ela é internamente lida antes de tudo, mas não é atribuído nenhum valor a ela.
console.log(sobrenome) /* uncaught referenceError: cannot acess 'sobrenome' before initialization. 
- a variável LET só é computada na linha/ordem q é escrita, por isso o erro do console.*/

var nome = "davi"
let sobrenome = "banni"

console.log(nome)
console.log(sobrenome)