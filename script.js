// DOM
let ulTasks = document.querySelector("ul");
let inputTask = document.getElementById("task");

let arrTasks = [];

if (localStorage.getItem("tasks") == null) {
  localStorage.setItem("tasks", JSON.stringify(arrTasks));
} else {
  arrTasks = JSON.parse(localStorage.getItem("tasks"));
  arrTasks.forEach((task) => {
    let liNewTask = document.createElement("li");
    liNewTask.textContent += task;
    ulTasks.appendChild(liNewTask);
  });
}

inputTask.addEventListener("keyup", (e) => {
  if (e.key == "Enter") {
    let inputTaskValue = inputTask.value;

    if (inputTaskValue != "") {
      let liNewTask = document.createElement("li");

      liNewTask.textContent += inputTaskValue;

      let radioAdd = document.querySelector("input[name=add]:checked");

      if (radioAdd.value == "beggin") {
        ulTasks.prepend(liNewTask);
        arrTasks.unshift(inputTaskValue);
      } else {
        ulTasks.appendChild(liNewTask);
        arrTasks.push(inputTaskValue);
      }
      inputTask.value = "";
      localStorage.setItem("tasks", JSON.stringify(arrTasks));
    }
  }
});

ulTasks.addEventListener("click", (e) => {
  if (e.target.tagName == "LI") {
    e.target.remove();
    let index = arrTasks.indexOf(e.target.textContent);
    arrTasks.splice(index, 1);
    localStorage.setItem("tasks", JSON.stringify(arrTasks));
  }
});
