// const hamburger = new Hamburger(Hamburger.SIZE_SMALL);
// // добавка из майонеза
// hamburger.addTopping(Hamburger.TOPPING_MAYO);
// hamburger.addTopping(Hamburger.TOPPING_POTATO);

// console.log("Price with sauce: “ + hamburger.getPrice());
// console.log("Callories with sauce: “ + hamburger.getCallories());

function Hamburger(size) {
  this.size = size;
  this.toppings = [];
  this.price = this.size.price;
  this.calories = this.size.calories;
}

Hamburger.SIZE_SMALL = { price: 50, calories: 20 };
Hamburger.SIZE_MEDIUM = { price: 75, calories: 30 };
Hamburger.SIZE_LARGE = { price: 100, calories: 40 };

Hamburger.TOPPING_MAYO = { price: 20, calories: 5 };
Hamburger.TOPPING_POTATO = { price: 15, calories: 10 };
Hamburger.TOPPING_CHEESE = { price: 10, calories: 20 };
Hamburger.TOPPING_SALAD = { price: 20, calories: 5 };
Hamburger.TOPPING_seasoning = { price: 15, calories: 0 };

Hamburger.prototype.getPrice = function () {
  return this.price + this.toppings.reduce((acc, e) => acc + e.price, 0);
};

Hamburger.prototype.getCallories = function () {
  return this.calories + this.toppings.reduce((acc, e) => acc + e.calories, 0);
};

Hamburger.prototype.addTopping = function (topping) {
  this.toppings.push(topping);
};

const hamburger = new Hamburger(Hamburger.SIZE_SMALL);
hamburger.addTopping(Hamburger.TOPPING_MAYO);

console.log(hamburger);

console.log("Price with sauce: " + hamburger.getPrice());
console.log("Callories with sauce: " + hamburger.getCallories());
