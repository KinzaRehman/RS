//alert('works')

//1 get the different elemtns that are in my html 
//2 create functions to add new list items (add based on clikc or enter key, delete, check, edit list items)
//3 count tasks that have been complete based on check button?
// if the person adds more stuff then it shoul dbe an add button 
//the reset button makes the lsit go back to 0 items, like the mian landing page 
//the tasks need to show up in the list 

//console.log('works');

const inputBox = document.querySelector("#input-box");
const addButton = document.querySelector("#input-button");
const resetButton = document.querySelector("#reset");
const listContainer = document.querySelector("#list-container");
const completedCounter = document.querySelector("#completed-counter");
const uncompletedCounter = document.querySelector("#uncompleted-counter");
const todoForm = document.querySelector("#todo-form");
const errorMessage = document.querySelector("#error-message");

todoForm.addEventListener("submit", function(event) {
    event.preventDefault();
    addTask();
});

resetButton.addEventListener("click", function() {
    listContainer.innerHTML = "";
    updateCounters();
});



function addTask() {
    const taskText = inputBox.value.trim();

    if (taskText === "") {
        errorMessage.textContent = "Please enter a task.";
        inputBox.focus();
        return;
    }

    errorMessage.textContent = "";

    // Create the list item
    const listItem = document.createElement("li");

    // Create the checkbox
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    // Create the task text
    const taskName = document.createElement("span");
    taskName.textContent = taskText;
    taskName.contentEditable = "false";

    // Create the Edit button
    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.type = "button";

    // Create the Delete button
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.type = "button";

    // Check or uncheck the task
    checkbox.addEventListener("change", function() {
        taskName.classList.toggle("completed", checkbox.checked);
        updateCounters();
    });

    // Start or finish editing
    editButton.addEventListener("click", function() {
        const isEditing = taskName.contentEditable === "true";

        if (isEditing) {
            saveEditedTask();
        } else {
            taskName.contentEditable = "true";
            taskName.focus();
            editButton.textContent = "Save";
        }
    });

    // Save the edited task
    function saveEditedTask() {
        const updatedTask = taskName.textContent.trim();

        if (updatedTask === "") {
            errorMessage.textContent = "A task cannot be empty.";
            taskName.focus();
            return;
        }

        taskName.textContent = updatedTask;
        taskName.contentEditable = "false";
        editButton.textContent = "Edit";
        errorMessage.textContent = "";
        inputBox.focus();
    }

    // Press Enter to save the edited task
    taskName.addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            event.preventDefault();
            saveEditedTask();
        }
    });

    // Delete the task
    deleteButton.addEventListener("click", function() {
        listItem.remove();
        updateCounters();
    });

    // Place everything inside the list item
    listItem.appendChild(checkbox);
    listItem.appendChild(taskName);
    listItem.appendChild(editButton);
    listItem.appendChild(deleteButton);

    // Place the list item inside the task list
    listContainer.appendChild(listItem);

    // Clear and focus the Add Task input
    inputBox.value = "";
    inputBox.focus();

}


function updateCounters() {
    const totalTasks = listContainer.children.length;
    const completedTasks = listContainer.querySelectorAll("input[type='checkbox']:checked").length;
    const uncompletedTasks = totalTasks - completedTasks;
}
updateCounters();