let scores = 0;

let taskOne = prompt("Сколько будет 2 + '2' в JavaScript?");
if ( taskOne == 22){
    scores = scores + 10
};


let taskTwo = prompt("Назовите оператор присваивания в JavaScript");
if ( taskTwo == "="){
    scores = scores + 10
    
};


let taskThree = prompt("Сколько будет 5 / 0?");
if ( taskThree == "Infinity"){
    scores = scores + 10
};


let taskFour= prompt("Одинаково ли работает == и === в JavaScript?");
if ( taskFour == "no"){
    scores = scores + 10
};


let taskFive = prompt("Чему равно выражение Boolean(null) в JavaScript?");
if ( taskFive == "false"){
    scores = scores + 10
};

alert("Ваш результат " + scores + " баллов");