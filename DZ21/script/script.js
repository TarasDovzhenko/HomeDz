function onGetPostClick() {
  fetch("https://jsonplaceholder.typicode.com/todos")
    .then((response) => response.json())
    .then((data) => handlePosts(data))
    .catch((error) => console.log(error));
}

function handlePosts(toDos) {
  for (toDo of toDos) {
    addPost(toDo);
  }
}

function addPost(toDo) {
  let html = postItemTemplate.innerHTML.replace("{{title}}", toDo.title);
  html = html.replace("{{body}}", toDo.completed);
  html = html.replace("{{id}}", toDo.id);
  postsContainer.insertAdjacentHTML("beforeend", html);
  colorToDo();
}

function colorToDo() {
  const completedInP = document.querySelectorAll(`.completed`);

  for (let i of completedInP) {
    if (i.textContent === "false") {
      i.style.color = `green`;
    }
    if (i.textContent === "true") {
      i.style.color = `red`;
    }
  }
}
