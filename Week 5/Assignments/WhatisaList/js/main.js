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
    const listItem = document.createElement("li");
    listItem.textContent = taskText; 
    listContainer.appendChild(listItem); 
    inputBox.value = "";


}






