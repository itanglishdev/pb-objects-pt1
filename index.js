// Ex 1
const person = {
  name: "Me",
  surName: "Yu",
  age: 22,
  city: "Munich"
}

const personArray = Object.entries(person)
console.log(personArray)

// Ex 2

const getObjectValues = {
  choice1: "tea",
  choice2: "coffee",
  choice3: "milk"
}
console.log(Object.values(getObjectValues));