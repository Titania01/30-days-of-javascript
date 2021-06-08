//Exercises Level 1

// 1.Create an Animal class. The class will have name, age, color, legs properties and create different methods

class Animal {
  constructor(name, age, color, legs) {
    console.log(this);
    this.name = name;
    this.age = age;
    this.color = color;
    this.legs = legs;
    this.tail = 0;
    this.deformity = [];
  }
  getFullName() {
    const about = this.name + " " + this.age;
    return about;
  }
  get getTail() {
    return this.tail;
  }
  get getDeformity() {
    return this.deformity;
  }
  set setTail(tail) {
    return (this.tail += tail);
  }
  set setDeformity(deform) {
    this.deformity.push(deform);
  }
  getAnimalInfo() {
    let fullName = this.getFullName();
    let deformity =
      this.deformity.length > 0 &&
      this.deformity.slice(0, this.deformity.length - 1).join(", ") +
        ` and ${this.deformity[this.deformity.length - 1]}`;
    let formattedDeformity = deformity ? `It has ${deformity}` : "";
    let info = `${fullName} is ${this.age}. ${formattedDeformity}`;
    return info;
  }
  static favouriteDeformity() {
    const deforms = ["tail cut", "one eyed", "k legged", "mushy"];
    const index = Math.floor(Math.random() * deforms.length);
    return deforms[index];
  }
  static showDateTime() {
    let now = new Date();
    let year = now.getFullYear();
    let month = now.getMonth() + 1;
    let date = now.getDate();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    if (minutes < 10) {
      minutes = "0" + minutes;
    }
    let dateMonthYear = date + "." + month + "." + year;
    let time = hours + ":" + minutes;
    let fullTime = dateMonthYear + " " + time;
    return fullTime;
  }
}

const dog = new Animal("Bamboo", 4, "brown", 4);
console.log(dog);
console.log(dog.getFullName());

console.log(dog.getTail);
console.log(dog.getDeformity);

dog.setTail = 1;
dog.setDeformity = "cut tail";
dog.setDeformity = "one eyed";
dog.setDeformity = "k legged";

console.log(dog.tail);
console.log(dog.deformity);
console.log(dog.getAnimalInfo());
console.log(Animal.favouriteDeformity());
console.log(Animal.showDateTime());

// //2.Create a Dog and Cat child class from the Animal Class.
// class Dog extends Animal {
//   bark() {
//     console.log("woof woof!!");
//   }
// }
// const d1 = new Dog("Bamboo", 6, "brown", 4);
// console.log(d1);
// // console.log(d1.bark());
// console.log(d1.getFullName());
// console.log(d1.getAnimalInfo());

//Exercises Level 2
//Override the method you create in Animal class
class Dog extends Animal {
  constructor(name, age, color, legs, gender) {
    super(name, age, color, legs);
    this.gender = gender;
  }
  bark() {
    console.log("woof woof!!");
  }
  getAnimalInfo() {
    let fullName = this.getFullName();

    let deformity =
      this.deformity.length > 0 &&
      this.deformity.slice(0, this.deformity.length - 1).join(", ") +
        ` and ${this.deformity[this.deformity.length - 1]}`;
    let pronoun = this.gender == "Male" ? "He" : "She";
    let formattedDeformity = deformity ? `${pronoun} is ${deformity}` : "";
    let info = `${fullName} is ${this.age}. ${pronoun} has ${this.color} color, ${formattedDeformity}`;
    return info;
  }
}
const dog1 = new Dog("Bamboo", 5, "brown", 4, "Male");
dog1.setDeformity = "blind";
dog1.setDeformity = "dwarf";
dog1.setDeformity = "short";

console.log(dog1);
console.log(dog1.bark());
console.log(dog1.getFullName());
console.log(dog1.getAnimalInfo());

// Exercises Level 3
//1.Let's try to develop a program which calculate measure of central tendency of a sample(mean, median, mode) and measure of variability(range, variance, standard deviation). In addition to those measures find the min, max, count, percentile, and frequency distribution of the sample. You can create a class called Statistics and create all the functions which do statistical calculations as method for the Statistics class. Check the output below.

class Statistics {
  constructor()
}