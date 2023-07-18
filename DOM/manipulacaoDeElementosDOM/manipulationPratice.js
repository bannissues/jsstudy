function addContact() {
    const contactSection = document.getElementById('contacts-list')
    
    const h3 = document.createElement('h3')
    h3.innerText = "contact"

    const ul = document.createElement('ul')

    const nameli = document.createElement('li')
    nameLi.innerText = "name: "
    const nameInput = document.createElement('input')
    nameInput.type = "text"
    nameInput.name = "fullname"
    ul.createElement('br')
    ul.appendChild(document.createElement('br'))

    nameli.appendChild(nameInput)
    ul.appendChild(nameli)

    const phoneLi = document.createElement('li')
    phoneLi.innerText = "cellphone: "
    const phoneInput = document.createElement('input')
    phoneInput.type = "text"
    phoneInput.name = "fullname"
    phoneLi.appendChild(phoneInput)
    ul.appendChild(phoneLi)
    ul.appendChild(document.createElement('br'))

    const adressLi = document.createElement('li')
    adressLi.innerHTML = '<label for="adress">adress: </label>'
    const adressInput = document.createElement('input')
    adressInput.type = 'text'
    adressInput.name = 'adress'
    adressInput.id = 'adress'
    adressLi.appendChild(adressInput)
    ul.appendChild(adressLi)
    ul.appendChild(document.createElement('br'))

    contactSection.append(h3, ul)
}

function removeContact() {
    const contactSection = document.getElementsByTagName('h3')
    const contacts = document.getElementsByTagName('ul')

    contactSection.removeChild(titles[titles,lenght -1])
    contactSection.removeChild(contacts[contacts -1])
}



