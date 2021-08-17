let order = document.querySelector(`.btnEnter`);

order.addEventListener("click", addRowTable);

function addRowTable() {
  let productValue = document.querySelector(".inputProduct");
  let priceValue = document.querySelector(".inputPrice");
  let quantityValue = document.querySelector(".inputQuantity");
  let valueProduct = productValue.value;

  if (valueProduct === "") {
    alert("It is not Product");
  } else {
    let creatTable = document.querySelector(".table");
    let removeEl = document.createElement("button");

    let totalEl = document.querySelector(".total");

    let sring = document.createElement("tr");

    let columnOne = document.createElement("td");
    columnOne.textContent = productValue.value;
    columnOne.setAttribute(`class`, `product`);

    let columnTwo = document.createElement("td");
    columnTwo.textContent = priceValue.value;
    columnTwo.setAttribute(`class`, `price`);

    let columnThree = document.createElement("td");
    columnThree.textContent = quantityValue.value;
    columnThree.setAttribute(`class`, `quantity`);

    sring.appendChild(columnOne);

    sring.appendChild(columnThree);
    sring.appendChild(columnTwo);
    sring.appendChild(removeEl);
    creatTable.prepend(sring);

    removeEl.classList.add("delete-btn");
    removeEl.innerHTML = "DELETE";

    productValue.value = ``;
    priceValue.value = ``;
    quantityValue.value = ``;

    let total = 0;

    let priceRow = document.querySelectorAll(`.price`);

    for (let i of priceRow) {
      let tdVelue = i.textContent;
      total += parseInt(tdVelue);
    }

    totalEl.innerHTML = `TOTAL: ${total} `;

    document.addEventListener("click", function (e) {
      if (e.target.className === "delete-btn") {
        let tr = e.target.parentNode;
        let rowValue = e.target.previousSibling;
        let rowScore = rowValue.textContent;
        total = total - parseInt(rowScore);

        tr.remove();
        totalEl.innerHTML = `TOTAL: ${total} `;
      }
    });
  }
}
