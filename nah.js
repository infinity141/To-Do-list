var list = document.getElementById("todo");
var element_creator = document.getElementById("listed");
var element_creator_2 = document.getElementById("listed_2");
var element_creator_3 = document.getElementById("listed_3");
var button = document.getElementById("finished");
var form = document.getElementById("formm");
var submitted = [...document.querySelectorAll("button")];
var data = [];
let index = 0;
var retvaltru = [];
var retvalfls = [];
function go() {
  var value_taker = document.createElement("input");
  var phara_taker = document.createElement("span");
  var new_line = document.createElement("br");
  value_taker.type = "checkbox";
  value_taker.setAttribute("data-id", index);
  value_taker.style.marginRight = "4px";
  phara_taker.innerHTML = list.value;
  element_creator.appendChild(value_taker);
  element_creator.appendChild(phara_taker);
  element_creator.appendChild(new_line);

  data.push({ value: list.value, checked: false });
  value_taker.addEventListener("change", function (event) {
    var id = parseInt(event.target.attributes[1].value);
    data[id].checked = !data[id].checked;
    retvaltru = data.filter(function (value, index) {
      return value.checked == true;
    });
    element_creator_2.innerHTML = "";
    retvaltru.forEach(function (event, index) {
      var phara_taker = document.createElement("span");
      var new_line = document.createElement("br");
      phara_taker.innerHTML = event.value;
      element_creator_2.appendChild(phara_taker);
      element_creator_2.appendChild(new_line);
    });
    retvalfls = data.filter(function (value, index) {
      return value.checked == false;
    });
    element_creator_3.innerHTML = "";
    retvalfls.forEach(function (event, index) {
      var phara_taker = document.createElement("span");
      var new_line = document.createElement("br");
      phara_taker.innerHTML = event.value;
      element_creator_3.appendChild(phara_taker);
      element_creator_3.appendChild(new_line);
    });
  });
  retvalfls = data.filter(function (value, index) {
    return value.checked == false;
  });
  element_creator_3.innerHTML = "";
  retvalfls.forEach(function (event, index) {
    var phara_taker = document.createElement("span");
    var new_line = document.createElement("br");
    phara_taker.innerHTML = event.value;
    element_creator_3.appendChild(phara_taker);
    element_creator_3.appendChild(new_line);
  });
  index++;
  list.value = "";
}

button.addEventListener("click", function () {
  go();
});

form.addEventListener("submit", function (event) {
  event.preventDefault();
});
