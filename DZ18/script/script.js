let buttonEnter = document.getElementById(`butt`);
let getInputText = document.getElementById(`myText`);
let div = document.querySelector(`.welcome`);

let form = document.querySelector(`.form`);

buttonEnter.addEventListener(`click`, divDisplay);

// function divDisplay() {
//   if (getInputText.value == "") {
//     div.innerText = `ERROR`;
//     div.style.display = "block";
//   } else {
//     localStorage.setItem(`name`, getInputText.value);
//     div.textContent = `welcome ${getInputText.value}`;
//     div.style.display = "block";
//     form.style.display = "none";
//     getInputText.value = ``;
//   }
// }

// window.onload = function () {
//   let localName = localStorage.getItem(`name`);
//   if (localName) {
//     div.textContent = `welcome ${localName}`;
//     div.style.display = "block";
//     form.style.display = "none";
//   }
// };

function divDisplay() {
  if (getInputText.value == "") {
    div.innerText = `ERROR`;
    div.style.display = "block";
  } else {
    document.cookie = "name" + "=" + getInputText.value;

    div.textContent = `welcome ${getInputText.value}`;
    div.style.display = "block";
    form.style.display = "none";
    getInputText.value = ``;
  }
}

window.onload = function () {
  let cookies = document.cookie.split("; ");
  let cookiesObj = {};
  cookies.forEach((el) => {
    let val = el.split("=");
    cookiesObj[val[0]] = val[1];
  });
  let coockName = cookiesObj.name;
  if (coockName) {
    div.textContent = `welcome ${coockName}`;
    div.style.display = "block";
    form.style.display = "none";
  }
};
