const form = document.getElementById("form");
const task = document.getElementById("task");
const date = document.getElementById("date");
const result = document.getElementById("result");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    if (task.value === "" || date.value === "") return;

    const parts = date.value.split("-");
    const newDate = parts[2] + "." + parts[1] + "." + parts[0];

    const div = document.createElement("div");
    div.classList.add("item");

    const dateSpan = document.createElement("span");
    dateSpan.classList.add("d");
    dateSpan.textContent = newDate;

    const textSpan = document.createElement("span");
    textSpan.classList.add("t");
    textSpan.textContent = task.value;

    const btn = document.createElement("button");
    btn.textContent = "X";

    btn.onclick = function() {
        div.remove();
    };

    div.appendChild(dateSpan);
    div.appendChild(textSpan);
    div.appendChild(btn);

    result.appendChild(div);

    task.value = "";
    date.value = "";
});