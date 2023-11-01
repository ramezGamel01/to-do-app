const inputBox = document.getElementById("text");
const error = document.getElementById("error");
const listContainer = document.getElementById("list-container");

function addTask() {
  if (inputBox.value === "") {
    error.innerHTML = "You need to type something";
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);

    let icon = document.createElement("span");
    icon.innerHTML = "\u00d7";
    li.appendChild(icon);

    // Clear the input box and error message
    inputBox.value = "";
    error.innerHTML = "";
    saveData();
  }
}

listContainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

function showData() {
  listContainer.innerHTML = localStorage.getItem("data");
}
showData();
