const radius = +prompt(`Введите радиус круга`);

if (Number.isNaN(radius)) {
    alert("Is NaN")
}
 {
    let operation = prompt(`Введите номер команды чтобы посчитать: 1 - диаметр, 2 - площадь круга, 3 - длинну окружности`);
    runOperation(operation, radius);
};



function runOperation (operation, rad) {
    switch (operation) {
        case "1":
            alert(`Диаметр окружности с радиусом ${rad} равен ${calcDiameter(rad)}`);
            break
        case "2":
            alert(`Площадь окружности с радиусом ${rad} равен ${calcCircumference(rad)}`);
                break
        case "3":
            alert(`Длина окружности с радиусом ${rad} равен ${calcAreaCirc(rad)}`);
                break
        default:
            alert(`Нет такой команды `);

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

output(operation, radius);