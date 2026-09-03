//alert('works')

//1 get the different elemtns that are in my html 
//2 create functions to add new list items (add based on clikc or enter key, delete, check, edit list items)
//3 count tasks that have been complete based on check button?
// if the person adds more stuff then it shoul dbe an add button 
//the reset button makes the lsit go back to 0 items, like the mian landing page 
//the person can save on local storrage their lsit items 
//the tasks need to show up in the list 

console.log('works');


const inputBox = document.querySelector("#input-box");
const addButton = document.querySelector("#input-button");
const listContainer = document.querySelector("#list-container");


addButton.addEventListener("click", addTask);

function addTask() {
    const taskText = inputBox.value.trim();

    if (taskText === "") {
        alert("there needs to be a task or reminder added ");
        return;
    }
    //creating a list, then we need the check box, a delete button and edit button. 
    const listItem = document.createElement("li");

    const checkbox = document.creatElemnt ("input");
    checkbox.type = "checkbox";

    const editButton = document.createElement("button");
    editButton.textContent = "Edit";

    listItem.appendChild(checkbox);
    listItem.appendChild(deleteButton);
    listItem.appendChild(editButton);


    checkbox.addEventListener("change", function() {
        taskName.classList.toggle('completed', checkbox.checked);

    });

    listContainer.appendChild(listItem); 

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.type = "button"; 
    
   
    inputBox.value = ""; 


}






