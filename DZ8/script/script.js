const obj = { name: `Alina`, age: 23, adress: { country: `UA`, city: `Kiev` } };

const objCopy = copy(obj);

function copy(obj) {
  let objCopy = {};
  for (const i in obj) {
    if (obj[i] instanceof Object) {
      objCopy[i] = copy(obj[i]);
      continue;
    }
    objCopy[i] = obj[i];
  }
  return objCopy;
}

console.log(objCopy);

console.log(obj);
