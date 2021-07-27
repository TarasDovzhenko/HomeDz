// --------------------------------- 1 --------------------------

function arrayFill(el, amount) {
  let arr = [];

  for (let i = 0; i < amount; i++) {
    arr[i] = el;
  }
  console.log(arr);
}

arrayFill(`x`, 5);

// --------------------------------- 2 --------------------------
(function () {
  let arbitraryArray = [[1, 2, 3], [4, 5], [6]];
  result = arbitraryArray.flat();
  result = result.reduce((sum, current) => sum + current);
  console.log(result);
})();

(function () {
  let arbitraryArray = [[1, 2, 3], [4, 5], [6]];
  sum = 0;

  for (let i = 0; i < arbitraryArray.length; i++) {
    for (let k = 0; k < arbitraryArray[i].length; k++) {
      sum = sum + arbitraryArray[i][k];
    }
  }

  console.log(sum);
})();

// --------------------------------- 3 --------------------------

let buttonEnter = document.getElementById(`butt`);
let getInputText = document.getElementById(`myText`);
let getLi = document.getElementById(`list`);
let count;

function createCounter(value) {
  let counter = value;
  return function () {
    return ++counter;
  };
}

function creatLiAndBtn() {
  let liEl = document.createElement(`li`);
  let span = document.createElement("span");
  let countPlus = document.createElement("button");

  countPlus.classList.add("increase-btn");
  countPlus.innerHTML = "COUNTER +";

  span.innerText = getInputText.value;

  liEl.append(span);
  liEl.append(countPlus);
  getLi.append(liEl);

  getInputText.value = ``;
}

buttonEnter.addEventListener("click", creatLiAndBtn);

document.addEventListener("click", function (e) {
  if (e.target.className === "increase-btn") {
    let span = e.target.previousSibling;

    count = createCounter(span.innerText);
    span.innerText = count();
  }
});
