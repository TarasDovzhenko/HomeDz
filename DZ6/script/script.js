const items = [
  {
    title: "IPhone 12",
    quantity: 2,
    price: 1000,
  },
  {
    title: "Magic Mouse",
    quantity: 3,
    price: 100,
  },
  {
    title: "MI Band 6",
    quantity: 4,
    price: 50,
  },
  {
    title: "Monitor ASUS",
    quantity: 1,
    price: 700,
  },
  {
    title: "USB Flash Drive",
    quantity: 5,
    price: 20,
  },
];

let prod = 0;

totalAmout(prod);

function totalAmout(producs) {
  for (let i = 0; i < items.length; i++) {
    producs = producs + items[i].price;
  }

  console.log(`Общая стоимость вашего заказа: ${producs}` + `$`);
}

avaragePriceOfOneProduct(prod);

function avaragePriceOfOneProduct(producs) {
  for (let i = 0; i < items.length; i++) {
    producs = producs + items[i].price;
  }
  console.log(producs / items.length + `$`);
}

printSorted(prod);

function printSorted(producs) {
  producs = items.sort(price);
  console.log(total);
}

function printSorted() {
  function byField(field) {
    return (a, b) => (a[field] > b[field] ? 1 : -1);
  }

  items.sort(byField(`price`));
  items.forEach((user) => console.log(user.price));
}
