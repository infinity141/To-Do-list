// ChatGPT genertated code never use it. I paid a lot not to use this code
// Just left it here for history now my code works perfectly!

const todoInput = document.getElementById("todo");
const addButton = document.getElementById("add-button");
const todoList = document.querySelector("#todo-list");
const doneList = document.querySelector("#done-list");
let listArray = JSON.parse(localStorage.getItem("listArray")) || [];
const form = document.querySelector("#form-container");

function saveList() {
  localStorage.setItem("listArray", JSON.stringify(listArray));
}

function addTodo() {
  const todoText = todoInput.value.trim();
  if (todoText === "") {
    return;
  }
  const todoItem = {
    checked: false,
    text: todoText,
    id: "listId" + listArray.length,
  };
  listArray.push(todoItem);
  saveList();
  renderTodoList();
  todoInput.value = "";
}

function toggleTodoItem(event) {
  const checkbox = event.target;
  const itemId = checkbox.id;
  const todoItem = listArray.find((item) => item.id === itemId);
  todoItem.checked = checkbox.checked;
  saveList();
  renderTodoList();
}

function renderTodoList() {
  todoList.innerHTML = "";
  doneList.innerHTML = "";
  for (const todoItem of listArray) {
    const listItem = document.createElement("li");
    listItem.classList.add("list-item");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = todoItem.id;
    checkbox.checked = todoItem.checked;
    checkbox.addEventListener("change", toggleTodoItem);
    const label = document.createElement("label");
    label.textContent = todoItem.text;
    label.setAttribute("for", todoItem.id);
    listItem.appendChild(checkbox);
    listItem.appendChild(label);
    if (todoItem.checked) {
      doneList.appendChild(listItem);
    } else {
      todoList.appendChild(listItem);
    }
  }
}

addButton.addEventListener("click", addTodo);
renderTodoList();

form.addEventListener("submit", (event) => {
  event.preventDefault();
  add();
});
