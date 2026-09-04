//alert('works')

//1 get the different elemtns that are in my html 
//2 create functions to add new list items (add based on clikc or enter key, delete, check, edit list items)
//3 count tasks that have been complete based on check button?
// if the person adds more stuff then it shoul dbe an add button 
//the reset button makes the lsit go back to 0 items, like the mian landing page 
//the tasks need to show up in the list 

//console.log('works');

//okay so each id is for something that i shoul dbe referncing like het if i click this then do that 

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

//first create the function with all the logic and things that need to happen

function addTask() {
    const taskText = inputBox.value.trim();

    if (taskText === "") {
        errorMessage.textContent = "Please enter a task.";
        inputBox.focus();
        return;
    }

    errorMessage.textContent = "";
        //first create the the elemtns for each thing like lists, buttons, delete button, edit button, 
    const listItem = document.createElement("li");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    const taskName = document.createElement("span");
    taskName.textContent = taskText;
    taskName.contentEditable = "false";

    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.type = "button";

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.type = "button";

    checkbox.addEventListener("change", function() {
        taskName.classList.toggle("completed", checkbox.checked);
        updateCounters();
    });

    editButton.addEventListener("click", function() {
        const isEditing = taskName.contentEditable === "true";

        if (isEditing) {
            saveEditedTask();
        } else {
            taskName.contentEditable = "true";
            taskName.focus();
            editButton.textContent = "Save";
            updateCounters();
        }
    });

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

    taskName.addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            event.preventDefault();
            saveEditedTask();
        }
    });

    deleteButton.addEventListener("click", function() {
        listItem.remove();
        updatecounters();
    });

//within the list items i need these aligned
    listItem.appendChild(checkbox);
    listItem.appendChild(taskName);
    listItem.appendChild(editButton);
    listItem.appendChild(deleteButton);

    listContainer.appendChild(listItem);

    inputBox.value = "";
    inputBox.focus();

    // Update the numbers after adding the task
    updatecounters();
}


//if its checked then + 1 if not checked then also plus one then calcuate the compelte is taking the sum of all checked, and uncomplete is total - checked

function updateCounters() {
    const totalTasks = listContainer.children.length;

    const completedTasks = listContainer.querySelectorAll("input[type='checkbox']:checked").length;

    const uncompletedTasks = totalTasks - completedTasks;

    completedCounter.textContent = completedTasks;
    uncompletedCounter.textContent = uncompletedTasks;

    if (totalTasks > 0 && uncompletedCounter == totalTasks) {
        alert("You're all caught up!")
    }
}
updateCounters();