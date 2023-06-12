const characters = [
    {level: '51', name: "malphite", race: "unknown", class: "tank"},
    {level: '36', name: "yone", race: "demi human", class: "shinobi"},
    {level: '47', name: "yasuo", race: "human", class: "shinobi"},
    {level: '22', name: "garen", race: "human", class: "warrior"},
    {level: '22', name: "lux", race: "human", class: "mage"},
    {level: '12', name: "amumu", race: "unknown", class: "mage"}
]
//os "for" comentados são métodos alternativos da mesma high order function

//map - faz uma ação em todo o array, seja filtrando ou algo do tipo
/* const names = []
 for (let i = 0; i < characters.length; i++) {
    names.push(characters[i].name)
} */
const names = characters.map(function (character){
    return character.name
})

//filter - filtra o tipo pedido, como uma pesquisa
/* for (let i = 0; i < characters.length; i++) {
    if (characters[i].race === 'human') {
        humans.push(characters[i])
    }
} */
const humans = characters.filter(function (humans){
    return humans.human === "human"
})

//reduce - transforma o array em outra coisa, seja um array, objeto, número, string...
const totalLevels = characters.reduce(function (amountedValue, character){
    return amountedValue + character.level
}, 0)

const races = characters.reduce(function (amountedValue, character){
    if (amountedValue[character.race]){
        amountedValue[character.race].push(character)
    } else {
        amountedValue[character.race] = [character]
    }

    return amountedValue
}, {})

//sort - serve para ordenar arrays, mudar de posição de acordo com algum critério !ALTERA O ARRAY ORIGINAL SE NÃO PASSAR O .SLICE()!
const orderCharacters = characters.slice().sort(function (a, b){
    return a.level - b.level //ordenar os personagens por nível de forma crescente
})

