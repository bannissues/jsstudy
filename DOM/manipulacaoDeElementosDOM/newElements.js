function addInput() {
    const ul = document.getElementById('ul')

    const newLi = document.createElement('li')
    newLi.className = 'li'
    newLi.innerText = 'novo input: '


    const newInput = document.createElement('input')
    newInput.type = 'text'
    newInput.name = 'input'

    newLi.appendChild(newInput)
    ul.appendChild(newLi)
}