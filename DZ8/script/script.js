const obj = { name: `Alina`, age: 23, adress: { country: `UA`, city: `Kiev` } };

const objCopy = copy(obj);

function copy(obj) {
  let objCopy = {};
  let key;

  for (key in obj) {
    objCopy[key] = obj[key];
  }
  return objCopy;
}

console.log(objCopy);

console.log(obj);
