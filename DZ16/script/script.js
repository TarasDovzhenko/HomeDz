// const personJohn = {
//   name: "John",
//   sayHello: function () {
//     console.log(`Hello, I'm ${this.name}`);
//   },
// };

// const sysAdmin = {
//   name: "Bob",
//   __proto__: personJohn,
// };

// const clientNatalia = {
//   name: "Natalia",
//   __proto__: personJohn,
// };

// sysAdmin.sayHello();

function Person(name) {
  this.name = name;
  this.sayHello = function () {
    console.log(`Hello, I'm ${this.name}`);
  };
}

function Employee(name) {
  this.name = name;
}

function Client(name) {
  this.name = name;
}

Employee.prototype = new Person();
const personJohn = new Employee("John");

Client.prototype = new Person();
const sysAdmin = new Employee("Bob");

const clientNatalia = new Client("Natalia");

personJohn.sayHello();
sysAdmin.sayHello();
clientNatalia.sayHello();

// _________________________ 3 _______________________

const students = [
  new Student("Student 1", [10, 9, 8, 0, 10]), // имя, оценки
  new Student("Student 12", [10, 0, 8, 0, 3, 4]),
];

function Student(name, ball) {
  this.name = name;
  this.ball = ball;
  this.averageMark = function () {
    console.log(this.ball.reduce((sum, num) => sum + num) / ball.length);
  };
}

for (let i = 0; i < students.length; i++) {
  students[i].averageMark();
}
