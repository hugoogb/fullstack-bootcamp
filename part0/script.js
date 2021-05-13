const list = []
const anotherList = list.concat(8)

const user = {
  name: "Hugo",
  twitter: "@hugoo_gb",
  instagram: "@hugoo_gb",
  age: 18,
  isDeveloper: true,
  links: ["https://etc", "https://www"],
}

const sumar = (a, b) => {
  console.log(a)
  console.log(b)
  return a + b
}

const op1 = 8
const op2 = 2

console.log(sumar(op1, op2))

function restar(a, b) {
  console.log("Operando a: ", a)
  console.log("Operando b: ", b)
  return a - b
}

console.log(restar(op1, op2))
