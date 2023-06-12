//é uma função que recebe outra função como parâmetro.

function calculate (a, b, operation) {
    console.log('doing an operation.')
    const result = operation(a, b)
    return result
}

function add (x, y) {
    console.log('doing a sum.')
    return x + y
}

console.log(calculate(3, 5, add))

console.log(calculate(8, 4, function (x,y){
    console.log('doing a sumtraction.')
    return x - y
}))

function showElement (element, index, array) {
    console.log({
        element,
        index,
        array
    })
}

const list = ['apple', 'banana', 'orange', 'lemon']

for (let i = 0; i < list.length; i++) {
    showElement(list[i], i, list)
}

list.forEach(showElement) // mesma coisa que o for anterior.

list.forEach(function (element, index, array){
    console.log({
        element,
        index,
        array
    })
})