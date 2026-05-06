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

    div.innerHTML = `
        <span class="d">${newDate}</span>
        <span class="t">${task.value}</span>
    `;

    result.appendChild(div);

    task.value = "";
    date.value = "";
});