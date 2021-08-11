//Variables for use throughout, linked to elements in DOM
const taskInput = document.getElementById("writeTaskName");
const addButton = document.getElementById("add");
const taskList = document.getElementById("taskList");
const sortButton = document.getElementById("sort");

//Onclick events
addButton.addEventListener("click", addTask)
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
    console.log(taskOutput); 
    liNew.className = "liNew";

    //tick box
    const doneButton = document.createElement("input");
    doneButton.setAttribute("type","checkbox");
    doneButton.className = "done";
    liNew.prepend(doneButton);
    doneButton.addEventListener("click", tickItem)
    function tickItem(ev){
        ev.target.classList.toggle('checked');
        liNew.classList.toggle('strike');
    }

    //delete from list
    const deleteButton = document.createElement("button");
    deleteButton.innerHTML ='\u00D7';
    deleteButton.className = "remove";
    liNew.appendChild(deleteButton);
    deleteButton.addEventListener("click", removeItem)
    function removeItem(){
              let div = this.parentElement;
              div.style.display = "none";
    }
}
