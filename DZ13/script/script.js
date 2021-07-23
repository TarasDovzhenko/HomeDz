function createCalculator(num) {
  return {
    sum: function (n) {
      return (num = n + num);
    },

    mult: function (n) {
      return (num = num * n);
    },

    sub: function (n) {
      return (num = num - n);
    },

    div: function (n) {
      return (num = num / n);
    },

    set: function (n) {
      return n;
    },
  };
}

const calc = createCalculator(10);

// calc.sum(5); /// 15
// calc.mult(10); // 150
// calc.sub(40); // 110
// calc.div(10); // 11
// calc.set(100); // 100

console.log(calc.sum(5));
console.log(calc.mult(10));
console.log(calc.sub(40));
console.log(calc.div(10));
console.log(calc.set(100));
