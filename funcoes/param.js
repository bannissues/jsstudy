function twice (x) { //a variável x pode ser alterada quantas vezes quiser
    alert('twice of  ' + x + ' is ' + (x * 2))
}

twice(5) // -> twice of 5 is 10

function say_hi (name_f = unkindled) {
    alert('hi, ' + name_f + '!')
}

name_f(davi) // -> hi, davi!
name_f() // -> hi, unkindled!

function sum (a, b) {
    alert('the result of ' + a + ' + ' + 'b' + ' is ' + (a + b) + '!')
}

soma(10, 15) // -> the result of 10 + 15 is 25!

function login (name, email, password, office = quest){
    const user = {
        name, 
        email,
        password,
        office
    }
    console.log(user)
}

login('banni', 'bannidf@gmail.com', '1234', 'student')