//Variables for use throughout, linked to elements in DOM
const taskInput = document.getElementById("writeTaskName");
const addButton = document.getElementById("add");
const taskDate = document.getElementById("date");
const taskList = document.getElementById("taskList");
const sortAZ = document.getElementById("sort");
let taskArr = [];

//Class for tasks
class TaskObj {
    constructor (taskName, dueDate, status, editable) {
        this.taskName = taskName;
        this.dueDate = dueDate;
        this.status = status;
        this.editable = editable;
    }
}
//Onclick events
addButton.addEventListener("click", createTaskObject)

function createTaskObject(){
    const liNew = document.createElement("li");
    let taskName = taskInput.value; 
    let dueDate = taskDate.value;
    let status = false;
    let editable = false;
   
    let taskCreated = new TaskObj(taskName, dueDate, status, editable);
    console.log(taskCreated);
    taskArr.push(taskCreated);
    console.log (taskArr);
    

    //Add task to list
    const taskOutput = document.createElement("span");
    taskOutput.innerHTML = taskCreated.taskName;
    taskOutput.className = "task";
    liNew.appendChild(taskOutput);
    if (taskName === '' || dueDate === '') {
        alert("Please enter a task name and due date.");
    } //in case field is empty upon add
    else {
        taskList.appendChild(liNew);
    } //add list item to taskList
    taskInput.value = "";
    liNew.className = "liNew";

    //date
    const dateOutput = document.createElement("span");
    dateOutput.innerHTML = dueDate;
    dateOutput.className = "dateCol";
    liNew.appendChild(dateOutput);

    //tick box
    const doneButton = document.createElement("input");
    doneButton.setAttribute("type", "checkbox");
    doneButton.className = "done";
    liNew.prepend(doneButton);
    doneButton.addEventListener("click", tickItem)
    function tickItem(ev) {
        ev.target.classList.toggle('checked');
        taskOutput.classList.toggle('strike');
        if (taskCreated.status === false){
            taskCreated.status = true;
        } else {
            taskCreated.status = false;
        }
        console.log (taskCreated);
    }
  
    //edit
    const editButton = document.createElement("button");
    editButton.innerHTML = '&#128393';
    editButton.className = "edit";
    liNew.appendChild(editButton);
    editButton.addEventListener("click", editItem);
    function editItem() {
        if (taskCreated.editable === false){
            taskOutput.contentEditable = true;
            dateOutput.contentEditable = true;
            taskCreated.editable = true;
            liNew.style.backgroundColor = "#dddbdb";
        } else {
            taskOutput.contentEditable = false;
            dateOutput.contentEditable = false;
            taskCreated.editable = false;
            liNew.style.backgroundColor = "#efefef";
        }
        taskCreated.dueDate = dateOutput.innerHTML;
        taskCreated.taskName = taskOutput.innerHTML;
        console.log (taskCreated);
    }

    //delete from list
    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = '\u00D7';
    deleteButton.className = "remove";
    liNew.appendChild(deleteButton);
    deleteButton.addEventListener("click", removeItem)
    function removeItem() {
        let div = this.parentElement;
        div.style.display = "none";
    }
}


/*
    //sort
        sortAZ.addEventListener("click", sortList);
    function sortList() {
        
    }
}*/
