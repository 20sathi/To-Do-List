document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("todo-form");
    const todoList = document.getElementById("todo-list");
    const input = document.getElementById("todo-input");

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        const taskText = input.value.trim();
        if (taskText) {
            addTask(taskText);
            input.value = "";
        }
    });

    function addTask(text) {
        const listItem = document.createElement("li");
        listItem.textContent = text;

        const completeButton = document.createElement("button");
        completeButton.textContent = "Complete";
        completeButton.addEventListener("click", function () {
            listItem.classList.toggle("complete");
        });

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", function () {
            todoList.removeChild(listItem);
        });

        const editButton = document.createElement("button");
        editButton.textContent = "Edit";
        editButton.addEventListener("click", function () {
            const newTask = prompt("Edit task:", listItem.textContent);
            if (newTask) {
                listItem.firstChild.textContent = newTask;
            }
        });

        listItem.appendChild(completeButton);
        listItem.appendChild(editButton);
        listItem.appendChild(deleteButton);

        todoList.appendChild(listItem);
    }
});
