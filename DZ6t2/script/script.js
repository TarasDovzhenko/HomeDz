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

totalAmout();

function totalAmout(producs) {
  let total = 0;
  for (let i = 0; i < items.length; i++) {
    total = total + items[i].price;
  }

  console.log(`Общая стоимость вашего заказа: ${total}` + `$`);
}

avaragePriceOfOneProduct();

function avaragePriceOfOneProduct(producs) {
  let total = 0;
  for (let i = 0; i < items.length; i++) {
    total = total + items[i].price;
  }
  console.log(total / items.length + `$`);
}

printSorted();

function printSorted(products) {
  let total = 0;
  total = items.sort(price);
  console.log(total);
}

function printSorted(products) {
  function byField(field) {
    return (a, b) => (a[field] > b[field] ? 1 : -1);
  }

  items.sort(byField(`price`));
  items.forEach((user) => console.log(user.price));
}
