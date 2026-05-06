const form = document.getElementById("form");
const task = document.getElementById("task");
const date = document.getElementById("date");
const result = document.getElementById("result");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    if (task.value === "" || date.value === "") return;

    result.innerHTML =
        "Zadanie: " + task.value + "<br>" +
        "Data: " + date.value;
});