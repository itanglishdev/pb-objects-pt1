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

// Ex 3

const personSecond = {
  firstName: "Michael",
  lastName: "Smith",
  job: "driver",
  age: 20,
  city: "Paris"
}
console.log(`${personSecond.firstName} ${personSecond.lastName} is a ${personSecond.age} year old ${personSecond.job} in ${personSecond.city}`);

// Bonus

const personObject = {
  name: "Me",
  surName: "Yu",
  age: 22,
  city: "Munich"
}

const personObjectArray = Object.entries(personObject)
console.log(personObjectArray)

// Bonus 2

const student = {
  name: "Mike",
  class: "4A",
  course: "English"
}
const studentArray = Object.keys(student)
console.log(studentArray);