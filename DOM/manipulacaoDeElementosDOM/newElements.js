function addInput() {
    const ul = document.getElementById('inputs')

    const newLi = document.createElement('li')
    newLi.className = 'list-item'
    newLi.innerText = 'new imput: '

    const newInput = document.createElement('input')
    newInput.type = 'text'
    newInput.name = 'input'

    newLi.appendChild(newInput)
    ul.appendChild(newLi)
} //append child serve para introduzir um elemento dentro do outro