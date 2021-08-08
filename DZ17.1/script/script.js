class Hamburger {
  constructor(size) {
    this.size = size;
    this.toppings = [];
    this.price = this.size.price;
    this.calories = this.size.calories;
  }

  static SIZE_SMALL = { price: 50, calories: 20 };
  static SIZE_MEDIUM = { price: 75, calories: 30 };
  static SIZE_LARGE = { price: 100, calories: 40 };

  static TOPPING_MAYO = { price: 20, calories: 5 };
  static TOPPING_POTATO = { price: 15, calories: 10 };
  static TOPPING_CHEESE = { price: 10, calories: 20 };
  static TOPPING_SALAD = { price: 20, calories: 5 };
  static TOPPING_seasoning = { price: 15, calories: 0 };

  getPrice = function () {
    return this.price + this.toppings.reduce((acc, e) => acc + e.price, 0);
  };

  getCallories = function () {
    return (
      this.calories + this.toppings.reduce((acc, e) => acc + e.calories, 0)
    );
  };

  addTopping = function (topping) {
    this.toppings.push(topping);
  };
}

const hamburger = new Hamburger(Hamburger.SIZE_SMALL);
hamburger.addTopping(Hamburger.TOPPING_MAYO);

console.log(hamburger);

console.log("Price with sauce: " + hamburger.getPrice());
console.log("Callories with sauce: " + hamburger.getCallories());
