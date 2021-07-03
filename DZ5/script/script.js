let radius = +prompt(`Введите радиус круга`);

while (Number.isNaN(radius)) {
  if (Number.isNaN(radius)) {
    alert("Is NaN");
    radius = +prompt(`Введите радиус круга`);
  } else {
    radius = +prompt(`Введите радиус круга`);
  }
}

operation = +prompt(
  `Введите номер команды чтобы посчитать: 1 - диаметр, 2 - площадь круга, 3 - длинну окружности`
);

while (Number.isNaN(operation) || operation > 3 || operation <= 0) {
  if (operation > 3 || operation <= 0) {
    alert("Incorrect value");
    operation = +prompt(
      `Введите номер команды чтобы посчитать: 1 - диаметр, 2 - площадь круга, 3 - длинну окружности`
    );
  } else if (Number.isNaN(operation)) {
    alert("Incorrect value");
    operation = +prompt(
      `Введите номер команды чтобы посчитать: 1 - диаметр, 2 - площадь круга, 3 - длинну окружности`
    );
  } else {
    operation = +prompt(
      `Введите номер команды чтобы посчитать: 1 - диаметр, 2 - площадь круга, 3 - длинну окружности`
    );
    runOperation(operation, radius);
  }
}

runOperation(operation, radius);

function runOperation(operation, rad) {
  switch (operation) {
    case 1:
      alert(`Диаметр окружности с радиусом ${rad} равен ${calcDiameter(rad)}`);
      break;
    case 2:
      alert(
        `Площадь окружности с радиусом ${rad} равен ${calcCircumference(rad)}`
      );
      break;
    case 3:
      alert(`Длина окружности с радиусом ${rad} равен ${calcAreaCirc(rad)}`);
      break;
  }
}

function calcDiameter(radius) {
  return 2 * radius;
}

function calcCircumference(radius) {
  return 2 * Math.PI * radius;
}

function calcAreaCirc(radius) {
  return 2 * Math.PI ** radius;
}

let questsion = confirm("Do you want calculate something else?");
if (questsion) {
  location.reload();
} else {
  alert("Bye Bye!");
}
