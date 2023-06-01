function calculate_average(a, b) {
  const arithmetic_average = (a + b) / 2
  return arithmetic_average
}

const result = calculate_average(10, 20)

console.log(result)

function create_product(name, price) {
  const product = {
    name,
    price,
    quantity: 1
  }
  return product
}

const notebook = create_product('Notebook Intel Core I9 16GB')
console.log(notebook)

function calculate_area(basis, height) {
  const rectangle_area = basis * height
  return rectangle_area
}
function square_area(side) {
  return calculate_area(side, side)
}

console.log(calculate_area(10, 15))

console.log(square_area(9))

// uma função só pode retornar uma vez.

function maiority(years) {
  if (years >= 18) {
    return 'of age'
  } else {
    return 'minor'
  }
}

console.log(maiority(19))
console.log(maiority(14))


