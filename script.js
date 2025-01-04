document.addEventListener("DOMContentLoaded", () => {
    const taskInput = document.getElementById("task-input");
    const addTaskBtn = document.getElementById("add-task-btn");
    const taskList = document.getElementById("task-list");

    addTaskBtn.addEventListener("click", () => {
        const taskText = taskInput.value.trim();
        if (taskText === "") {
            alert("Please enter a task!");
            return; // Ensure the rest of the code does not execute
        }

        // Create a new list item
        const taskItem = document.createElement("li");
        taskItem.className = "task-item";
        taskItem.innerHTML = `
            <span class="taskText">${taskText}</span>
            <button class="delete-btn">Delete</button>
        `;

        // Append the task item to the task list
        taskList.appendChild(taskItem);

        // Clear the input field
        taskInput.value = "";

        // Add event listener to delete button
        const deleteBtn = taskItem.querySelector(".delete-btn");
        deleteBtn.addEventListener("click", () => {
            taskList.removeChild(taskItem);
        });

        const taskTextElement = taskItem.querySelector("span");
        taskTextElement.addEventListener("click", () => {
          taskItem.classList.toggle("completed");
        });
       
    });
});
