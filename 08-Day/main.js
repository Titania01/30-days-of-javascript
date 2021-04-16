const person = {
  firstName: 'Asabeneh',
  age: 250,
  country: 'Finland',
  city:'Helsinki',
  skills: ['HTML', 'CSS', 'JS'],
  title: 'teacher',
  address: {
    street: 'Heitamienkatu 16',
    pobox: 2002,
    city: 'Helsinki'
  },
  getPersonInfo: function() {
    return `I am ${this.firstName} and I live in ${this.city}, ${this.country}. I am ${this.age}.`
  }
}

//Object methods: Object.assign, Object.keys, Object.values, Object.entries
//hasOwnProperty

const copyPerson = Object.assign({}, person)
console.log(copyPerson)
console.log(person.getPersonInfo());

const entries = Object.entries(copyPerson)
console.log(entries)

// Exercises: Level 1
const dog = {
  name: "Bingo",
  legs: 4,
  color: "rhode",
  age: 12,
  bark: function() {
    return 'woof woof'
  }
}
console.log(dog)
const prope = Object.entries(dog)
console.log(prope)