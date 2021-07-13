// -------------------- 1 -------------------

function mainTitle(year, newTitle) {
  newTitle.textContent = `${year}`;
}

mainTitle(2020, document.querySelector(`#title span`));

// -------------------- 2 -------------------

function delAttrib(attrName, selectorAttrib) {
  selectorAttrib.removeAttribute(`${attrName}`);
}

delAttrib(`my-attribute`, document.querySelector("[my-attribute='test']"));

// -------------------- 3 -------------------

function newBackground(el, color) {
  for (let i of el) {
    el = i.style.background = `${color}`;
  }
}

newBackground(document.querySelectorAll(`[data-id='revenue-value']`), `green`);

// -------------------- 4 -------------------

function addCell(textOne, textTwo, textThree) {
  let table = document.querySelector(`tbody`);

  let sring = document.createElement("tr");

  let columnOne = document.createElement("td");
  columnOne.innerHTML = `${textOne}`;

  let columnTwo = document.createElement("td");
  columnTwo.innerHTML = `${textTwo}`;

  let columnThree = document.createElement("td");
  columnThree.innerHTML = `${textThree}`;

  sring.appendChild(columnOne);

  sring.appendChild(columnTwo);

  sring.appendChild(columnThree);

  table.appendChild(sring);
}

addCell(`Lorem tre sty`, `Lorem opru`, `Lorem smail`);

// -------------------- 5 ----------------

function dellString(string) {
  string.parentNode.removeChild(string);
}

dellString(document.querySelector(`table tr`));
