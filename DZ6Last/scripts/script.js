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

function TotalAmout(products) {
  let count = 0
  for (let i = 0; i < products.length; i++) {
    count = count + products[i].quantity * products[i].price;
  }
  alert(`Общая стоимость вашего заказа: ${count} $.`);
  return count;
}

function avaragePriceOfOneProduct(products) {
  let value = 0;
  for (let i = 0; i < products.length; i++) {
    value = value + products[i].quantity;
  }
  alert(`Средняя цена одного товара из всего заказа:  ${TotalAmout(products) / value}.`);
  return TotalAmout(products) / value;
}

function printSorted(products) {
  products.sort(byField('price'));
  products.forEach(products => alert(products.title));
}
function byField(field) {
  return (a, b) => a[field] < b[field] ? 1 : -1
}

TotalAmout(items);

avaragePriceOfOneProduct(items);

printSorted(items)
