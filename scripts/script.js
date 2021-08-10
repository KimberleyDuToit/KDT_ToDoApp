//Variables for use throughout, linked to elements in DOM
const taskInput = document.getElementById("writeTaskName");
const addButton = document.getElementById("add");
const taskList = document.getElementById("taskList");
const sortButton = document.getElementById("sort");

//Onclick events
addButton.addEventListener("click", addTask)
taskList.addEventListener("click", tickItem)
sortButton.addEventListener("click", sortAZ)

//Add task to list
function addTask (){
    let liNew = document.createElement("li");
    let taskName = taskInput.value;
    let taskOutput = document.createTextNode(taskName);
        liNew.appendChild (taskOutput);
        if (taskName === ''){
            alert ("Please enter a task name.");
        } //in case field is empty upon add
        else {
            taskList.appendChild(liNew);
        } //add list item to taskList
        taskInput.value = "";  

//delete from list
    const deleteButton = document.createElement("span");
    deleteButton.innerHTML ='\u00D7';
    deleteButton.className = "remove";
    liNew.appendChild(deleteButton);
    deleteButton.addEventListener("click", removeItem)
    function removeItem(){
              let div = this.parentElement;
              div.style.display = "none";
    }
}
