function show() {
    const contactList = document.getElementById('contact-list')
    console.log(contactList)

    const listElements = document.getElementsByTagName("li")
    console.log(listElements)

    const contactInputs = document.getElementsByClassName('contact-input')
    console.log(contactInputs)

    const contacts = document.querySelectorAll('#contact-list > li > label')
    console.log(contacts) //o querySelectorAll te permite filtrar um nivel espcifico do que você quer.

    const contact1 = document.getElementsByName('contato1')
    console.log('contact1')
    
    const firstContact = document.querySelector('#contact-list > li > label')
    console.log(firstContact)  //query selector mostra o primeiro elemento a bater com os paramentros apresentados.
}



