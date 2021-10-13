const input = document.querySelector("#input");
const btn = document.querySelector("#button");
const loginContainer = document.querySelector("#login-container");
const chatWindow = document.querySelector("#chat-window");
const btnLogout = document.querySelector("#logout-button");
const btnEnter = document.querySelector("#button-enter");
const inputMsg = document.querySelector("#input-massage");
const containerBlock = document.querySelector(".container");
let socket = new WebSocket("wss://fep-app.herokuapp.com/");

function onLoadedChek() {
  if (localStorage.login) {
    loginContainer.classList = "container-none";
    containerBlock.classList.remove("container-none");
  } else {
    console.log("vvedite parol");
  }
}

function checkLogin() {
  input.value.trim();
  return input.value !== "" && input.value !== undefined;
}

function logout() {
  localStorage.clear();
  document.location.reload();
}

function makeClearInput() {
  inputMsg.value = "";
}

function addMassage() {
  socket.onopen();

  socket.onmessage = function (event) {
    const { type, payload } = JSON.parse(event.data);
    let html = postItemsInTemplate.innerHTML
      .replace("{{name}}", payload.username)
      .replace("{{massage}}", payload.message);
    massages.insertAdjacentHTML("beforeend", html);
  };
  makeClearInput();
}

btn.addEventListener("click", addLogin);
btnLogout.addEventListener("click", logout);
document.addEventListener("DOMContentLoaded", onLoadedChek());
btnEnter.addEventListener("click", addMassage);

function addLogin() {
  if (checkLogin()) {
    localStorage.login = input.value;
  } else {
    alert("Enter login");
  }
}

function initConection() {
  socket.onopen = onOpenSocet;
  socket.onclose = onCloseSocet;
  socket.onmessage = onSocketMassage;
}

socket.onopen = function (e) {
  socket.send(
    JSON.stringify({
      type: "message",
      payload: {
        username: `${localStorage.login}`,
        message: `${inputMsg.value}`,
      },
    })
  );
};
