//Variables for use throughout, linked to elements in DOM
const taskInput = document.getElementById("writeTaskName");
const addButton = document.getElementById("add");
const taskDate = document.getElementById("date");
const taskList = document.getElementById("taskList");

//Onclick events
addButton.addEventListener("click", addTask)

function addTask (){
    const liNew = document.createElement("li");
    const taskName = taskInput.value;
    const dueDate = taskDate.value;

//Add task to list
    const taskOutput = document.createElement("span");
    taskOutput.innerHTML = taskName;
    taskOutput.className = "task";
        liNew.appendChild (taskOutput);
        if (taskName === '' || dueDate === ''){
            alert ("Please enter a task name and due date.");
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
    doneButton.setAttribute("type","checkbox");
    doneButton.className = "done";
    liNew.prepend(doneButton);
    doneButton.addEventListener("click", tickItem)
    function tickItem(ev){
        ev.target.classList.toggle('checked');
        taskOutput.classList.toggle('strike');
    }

    //edit
    const editButton = document.createElement("button");
    editButton.innerHTML ='&#128393';
    editButton.className = "edit";
    liNew.appendChild(editButton);
    editButton.addEventListener("click", editItem)
    function editItem(){
        liNew.contentEditable = true;
        liNew.style.backgroundColor = "#dddbdb"; 
        
        
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
