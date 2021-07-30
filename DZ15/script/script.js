"use strict";

// ------------------------------ 1 ------------------

const user = {
  firstName: "Nikola",
  secondName: "Tesla",
  getFullName: function () {
    console.log(`${this.firstName} ${this.secondName}`);
  },
};

user.getFullName();

// ------------------------------ 2 ------------------
// 2) вызвать функцию через call, с заданием в виде контекста другой обьект {firstName: "Steve", secondName: "Jobs"}

const person = {
  firstName: "Steve",
  secondName: "Jobs",
};

const getFullNameCopy = user.getFullName;

getFullNameCopy.call(person);

// ------------------------------ 3 ------------------
// 3) вызвать функцию через apply, с заданием в виде контекста другой обьект {firstName: "Steve", secondName: "Wozniak "}

const man = { firstName: "Steve", secondName: "Wozniak " };
getFullNameCopy.apply(man);

// ------------------------------ 4 ------------------
// 4) создать копию функции getFullName с помощью bind и забайдить ее на обьект {firstName: "Julia ", secondName: "Roberts"}

const woman = { firstName: "Julia ", secondName: "Roberts" };

const getFullNameForWomen = getFullNameCopy.bind(woman);
getFullNameForWomen();

// ------------------------------ 5 ------------------
// 5) создать функцию контруктор, которая будет создавать подобные обьекты. Создать 3 примера разных обьектов с помощью этой фукнции контруктор.

function Worker(name, age, position) {
  this.name = name;
  this.age = age;
  this.position = position;
}

const worker = new Worker("Stiv", 22, "cleaner");
console.table(worker);

function Driver(name, age, mileageMiles) {
  this.name = name;
  this.age = age;
  this.mileageMiles = mileageMiles;
  this.mileageOnKm = function () {
    console.log(this.mileageMiles * 1.6);
  };
}

const driver = new Driver("Vlad", 32, 1000);
console.table(driver);
driver.mileageOnKm();

function Car(brand, color, consumption) {
  this.brand = brand;
  this.color = color;
  this.consumption = consumption;
}

const car = new Car("Volga", "red", "25 liters");

console.table(car);

// ------------------------- Задание 2 ------------------

function Calculator(num) {
  this.num = num;

  this.sum = function (n) {
    this.n = n;
    return (this.num = this.num + this.n);
  };

  this.mult = function (n) {
    this.n = n;
    return (this.num = this.num * this.n);
  };

  this.sub = function (n) {
    this.n = n;
    return (this.num = this.num - this.n);
  };

  this.div = function (n) {
    this.n = n;
    return (this.num = this.num / this.n);
  };

  this.set = function (n) {
    this.n = n;
    return this.n;
  };
}

const calc = new Calculator(10);

console.log(calc.sum(5));
console.log(calc.mult(10));
console.log(calc.sub(40));
console.log(calc.div(10));
console.log(calc.set(100));
