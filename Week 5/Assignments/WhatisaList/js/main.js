//alert('works')



console.log('works');


function addTask() {
    const taskInput = document.getElementById('task-input');
    if (!taskInput.value) {
        alert('add some texts of things');
        return;
    }

    const li = document.createElement('li');

    li.innerHTML = <label><input type="checkbox" class="task-checkbox"> ${taskInput.value} <button class="delete-button">Delete</button></label>;

}
