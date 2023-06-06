//métodos são funções atreladas a objetos.
let person = {
    name: "banni",
    age: 18,
    sayHi(){
        console.log('hi, ' + this.name) // this. mostra o proprio objeto dentro da variavel
    }
}

console.log(person)

//typeof console -> 'object' | typeof log -> 'function'

person.sayHi() // hi, banni
