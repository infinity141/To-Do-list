const todo = document.getElementById("todo");
const addButton = document.getElementById("add-button");
const allListContainer = document.querySelector("#all-list");
const todoListContainer = document.querySelector("#todo-list");
const doneListContainer = document.querySelector("#done-list");
const form = document.querySelector("#form-container");
let listArray = [];
let idCount = 0;

function init() {
  listArray = JSON.parse(localStorage.getItem("theBigList")) || [];
  for (let i = 0; i < listArray.length; i++) {
    addElement(listArray[i].text, listArray[i].checked, listArray[i].identify);
  }
}

init();

function add() {
  let idCountString = idCount.toString();
  let listInfoAllIdStorage = "listId" + idCountString;
  addElement(todo.value, false, listInfoAllIdStorage);

  listArray.push({
    checked: false,
    text: todo.value,
    identify: listInfoAllIdStorage,
  });
  todo.value = "";

  localStorage.setItem("theBigList", JSON.stringify(listArray));
}

function addElement(textPara, checkedPara, listInfoAllIdStorage) {
  // Manage the main list
  const listDiv = document.createElement("div");
  listDiv.classList.add("list-div");
  const listInfoAll = document.createElement("input");
  listInfoAll.classList.add("check-info");
  const listInfoDone = document.createElement("p");
  listInfoDone.classList.add("done-info");
  const listInfoTodo = document.createElement("p");
  listInfoTodo.classList.add("todo-info");
  listInfoDone.innerHTML = "💪 " + textPara;
  listInfoTodo.innerHTML = "😅 " + textPara;

  // Checks if the checkbox is checked or not
  listInfoAll.addEventListener("change", (event) => {
    if (listInfoAll.checked) {
      doneListContainer.appendChild(listInfoDone);
      todoListContainer.removeChild(listInfoTodo);
      for (let i = 0; i < listArray.length; i++) {
        if (listArray[i].identify == listInfoAllIdStorage) {
          listArray[i].checked = true;
        }
      }
    }
    if (!listInfoAll.checked) {
      doneListContainer.removeChild(listInfoDone);
      todoListContainer.appendChild(listInfoTodo);
      for (let i = 0; i < listArray.length; i++) {
        if (listArray[i].identify == listInfoAllIdStorage) {
          listArray[i].checked = false;
        }
      }
    }
    localStorage.setItem("theBigList", JSON.stringify(listArray));
  });

  // Handles the jaba jaba of the checkbox and stuff
  listInfoAll.type = "checkbox";
  listInfoAll.checked = checkedPara;
  listInfoAll.id = listInfoAllIdStorage;
  idCount++;
  const listInfoAllLabel = document.createElement("label");
  listInfoAllLabel.setAttribute("for", listInfoAllIdStorage);
  listInfoAllLabel.classList.add("list-info");
  listInfoAllLabel.textContent = textPara;
  console.log(listInfoAllIdStorage);

  // Give a common class name to all the elements
  listInfoAllLabel.classList.add("every-text");
  listInfoDone.classList.add("every-text");
  listInfoTodo.classList.add("every-text");

  // appends all the children to where we want them to be displayed
  listInfoAll.innerHTML = textPara;
  allListContainer.appendChild(listDiv);
  listDiv.appendChild(listInfoAll);
  listDiv.appendChild(listInfoAllLabel);

  // Determines if it is checked or not and puts it in its proper place.
  // And my God finding this small solutions wasn't as easy as it seems!
  if (checkedPara == true) {
    doneListContainer.appendChild(listInfoDone);
  } else {
    todoListContainer.appendChild(listInfoTodo);
  }
}

addButton.addEventListener("click", (event) => {
  add();
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
});
