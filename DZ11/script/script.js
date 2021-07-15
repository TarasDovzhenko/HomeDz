let buttonEnter = document.getElementById(`butt`);
let getInputText = document.getElementById(`myText`);
let getLi = document.getElementById(`list`);

buttonEnter.onclick = () => {
  let liEl = document.createElement(`li`);
  liEl.innerText = getInputText.value;
  getLi.append(liEl);
  liEl.style.listStyleType = `none`;
  liEl.style.display = `table`;
  getInputText.value = ``;

  let removeEl = document.createElement("input");
  removeEl.setAttribute("type", "button");
  removeEl.setAttribute("value", "Remove");
  removeEl.style.marginLeft = `30px`;
  liEl.appendChild(removeEl);
  removeEl.addEventListener("click", function () {
    liEl.parentNode.removeChild(liEl);
  });

  liEl.onclick = function () {
    if (liEl.style.backgroundColor) {
      liEl.style.backgroundColor = `green`;
    } else {
      liEl.style.backgroundColor = `yellow`;
    }
  };
};
