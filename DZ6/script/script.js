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

let counter = 0;
let total = 0;

totalAmout(total);

function totalAmout(producs) {
  for (let i = 0; i < items.length; i++) {
    total = total + items[i].price;
  }

  alert(`Общая стоимость вашего заказа: ${total}`);
}

avaragePriceOfOneProduct(total);

function avaragePriceOfOneProduct(producs) {
  for (let i = 0; i < items.length; i++) {
    total = total + items[i].price;
  }
  alert(total / items.length);
}

printSorted(total);

function printSorted(products) {
  total = items.sort(price);

  alert(total);
}

printSorted();

function printSorted(products) {
  function byField(field) {
    return (a, b) => (a[field] > b[field] ? 1 : -1);
  }

  items.sort(byField(`price`));
  items.forEach((user) => alert(user.price));
}
