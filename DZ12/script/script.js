// -------------------- 1 -------------------

window.onload = (function () {
  let btnYear = document.getElementById(`yearBtn`);

  btnYear.addEventListener("click", btnYearValue);

  function btnYearValue() {
    let year = document.querySelector(`.main-title-year`);
    let inputEnter = document.querySelector(`.form-control`);

    inputEnter.value = inputEnter.value.replace(/[^\d.]/g, "");
    year.textContent = inputEnter.value;
    inputEnter.value = ``;
  }
})();

// -------------------- 2 -------------------
window.onload = (function () {
  let attrBtn = document.getElementById(`removeAttrBtn`);
  attrBtn.addEventListener("click", removeAttrib, false);

  function removeAttrib() {
    let myAttrib = document.querySelector("[my-attribute='test']");
    myAttrib.removeAttribute(`my-attribute`);
    myAttrib.innerHTML = ``;
  }
})();

// -------------------- 3 -------------------

window.onload = (function () {
  let btnColor = document.getElementById(`setGreenBtn`);

  btnColor.addEventListener("click", btnChangeColor, { capture: true });

  function btnChangeColor(e) {
    e.stopPropagation();
    let dataIdColor = document.querySelectorAll(`[data-id='revenue-value']`);

    for (let i of dataIdColor) {
      i.style.backgroundColor = `green`;
    }
  }
})();
// -------------------- 4 -------------------

window.onload = (function () {
  let btnAddRow = document.getElementById(`addRowBtn`);

  btnAddRow.addEventListener("click", addRowTable);
  function addRowTable() {
    let penultimate = document.querySelector(`.penultimate-row`);

    let sring = document.createElement("tr");

    let columnOne = document.createElement("td");
    columnOne.textContent = `Lorem tre sty`;

    let columnTwo = document.createElement("td");
    columnTwo.textContent = `Lorem opru`;

    let columnThree = document.createElement("td");
    columnThree.textContent = `Lorem smail`;
    columnThree.setAttribute(`data-id`, `revenue-value`);

    sring.appendChild(columnOne);

    sring.appendChild(columnTwo);

    sring.appendChild(columnThree);

    penultimate.after(sring);
  }
})();
// -------------------- 5 -------------------

window.onload = (function () {
  let btnRemoveSection = document.getElementById(`removeSecondRowBtn`);
  btnRemoveSection.addEventListener("click", removeRow);

  function removeRow() {
    let secondLineTable = document.querySelector(`.second-line`);
    secondLineTable.remove();
  }
})();
// -------------------- 6 -------------------

window.onload = (function () {
  document.addEventListener("DOMContentLoaded", () => {
    let titleMain = document.getElementById("title");
    titleMain.style.fontSize = "24px";
  });
})();
