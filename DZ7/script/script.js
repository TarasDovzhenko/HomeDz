let num = prompt(`Enter numbers`);

function numbersEnter(n) {
  return n ? numbersEnter(n - 1) + n.toString() : "";
}
console.log(numbersEnter(num));

function sumToGo(n) {
  sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

let result = sumToGo(num);

console.log(result);
