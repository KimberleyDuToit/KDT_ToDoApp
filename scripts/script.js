//Variables for use throughout, linked to elements in DOM
const taskInput = document.getElementById("writeTaskName");
const addButton = document.getElementById("add");
const taskDate = document.getElementById("date");
const taskList = document.getElementById("taskList");

//Onclick events
addButton.addEventListener("click", addTask)

//Add task to list
function addTask (){
    const liNew = document.createElement("li");
    const taskName = taskInput.value;
    const dueDate = taskDate.value;
    const taskOutput = document.createTextNode(taskName);
        liNew.appendChild (taskOutput);
        if (taskName === '' || dueDate === ''){
            alert ("Please enter a task name and due date.");
        } //in case field is empty upon add
        else {
            taskList.appendChild(liNew);
        } //add list item to taskList
        taskInput.value = "";
        liNew.className = "liNew";
    /*const dateOutput = document.createTextNode(' ' + dueDate);
        liNew.appendChild (dateOutput);
        if (taskName === '' || dueDate === ''){
            alert ("Please enter a task name and due date.");
        } //in case field is empty upon add
        else {
            taskList.appendChild(liNew);
        } //add list item to taskList
        taskDate.value = "";

    
    liNew.date = dateOutput.value;
    liNew.task = taskOutput.value; */

    //date
    const dateOutput = document.createElement("span");
    dateOutput.innerHTML = dueDate;
    dateOutput.className = "dateCol";
    liNew.appendChild(dateOutput);

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
