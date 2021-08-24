//Variables for use throughout, linked to elements in DOM
const taskInput = document.getElementById("writeTaskName");
const addButton = document.getElementById("add");
const taskDate = document.getElementById("date");
const taskList = document.getElementById("taskList");
const sortAZ = document.getElementById("sort");
const sortDue = document.getElementById("sortDate");


//Class for tasks
class TaskObj {
    constructor(taskName, dueDate, status, editable) {
        this.taskName = taskName;
        this.dueDate = dueDate;
        this.status = status;
        this.editable = editable;
    }
}

//Array and storage
let taskArr = [];
let taskSaved = localStorage.getItem("taskArrStorage");
let taskLoad = JSON.parse(taskSaved);
if (taskLoad === null) {
    console.log('No objects in array')
}
else { //pushes the stored elements to taskArr
    taskArr.push(...taskLoad);
    console.log(taskArr);
    taskArr.forEach(ele => {
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    const liNew = document.createElement("li");
    let taskName = this.taskName;
    let dueDate = this.dueDate;
    let status = this.status;
    let editable = this.editable;

    let taskCreated = ele;
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
    dateOutput.innerHTML = taskCreated.dueDate;
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
        if (taskCreated.status === false) {
            taskCreated.status = true;
        } else {
            taskCreated.status = false;
        }
        console.log(taskCreated);
        console.log(taskArr);
    }

    //edit - 
    const editButton = document.createElement("button");
    editButton.innerHTML = '&#128393';
    editButton.className = "edit";
    liNew.appendChild(editButton);
    editButton.addEventListener("click", editItem);
    function editItem() {
        if (taskCreated.editable === false) {
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
        console.log(taskCreated);
        save()
    }

    //delete from list - works but does not remove item from array
    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = '\u00D7';
    deleteButton.className = "remove";
    liNew.appendChild(deleteButton);
    deleteButton.addEventListener("click", removeItem)
    function removeItem() {
        let div = this.parentElement;
        div.style.display = "none";
    }
    });
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//save array to storage
function save() {
    let taskArrStorage = JSON.stringify(taskArr);
    localStorage.setItem("taskArrStorage", taskArrStorage);
    console.log('Array Stored in Local')
}

//Onclick events
addButton.addEventListener("click", createTaskObject)
sortAZ.addEventListener("click", sortByName)
sortDue.addEventListener("click", sortByDate)

function createTaskObject() {
    const liNew = document.createElement("li");
    let taskName = taskInput.value;
    let dueDate = taskDate.value;
    let status = false;
    let editable = false;

    let taskCreated = new TaskObj(taskName, dueDate, status, editable);

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
        console.log(taskCreated);
        taskArr.push(taskCreated);
        console.log('Object saved on task add');
    } //add list item to taskList
    taskInput.value = "";
    liNew.className = "liNew";

    //date
    const dateOutput = document.createElement("span");
    dateOutput.innerHTML = taskCreated.dueDate;
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
        if (taskCreated.status === false) {
            taskCreated.status = true;
        } else {
            taskCreated.status = false;
        }
        console.log(taskCreated);
        console.log(taskArr);
    }

    //edit
    const editButton = document.createElement("button");
    editButton.innerHTML = '&#128393';
    editButton.className = "edit";
    liNew.appendChild(editButton);
    editButton.addEventListener("click", editItem);
    function editItem() {
        if (taskCreated.editable === false) {
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
        console.log(taskCreated);
        save()
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

    //save on task creation
    if (taskArr.length > 0 & taskName !== '' & dueDate !== '') {
        save()
    } else {
        console.log('No array saved')
    }
}

function sortByName() {
    //sort list on UI by task name
    var list, i, switching, b, shouldSwitch, dir, switchcount = 0;
    list = taskList;
    switching = true;
    dir = "AZ";
    while (switching) {
        switching = false;
        b = list.getElementsByTagName("li");
        for (i = 0; i < (b.length - 1); i++) {
            shouldSwitch = false;
            if (dir == "AZ") {
                sortAZ.innerHTML = 'Sort Z-A';
                //sort objects within array by task name A-Z
                taskArr.sort(function (a, b) {
                    var taskNameA = a.taskName.toLowerCase(), taskNameB = b.taskName.toLowerCase()
                    if (taskNameA < taskNameB)
                        return -1
                    if (taskNameA > taskNameB)
                        return 1
                    return 0
                })
                if (b[i].innerHTML.toLowerCase() > b[i + 1].innerHTML.toLowerCase()) {
                    shouldSwitch = true;
                    break;
                }
            } else if (dir == "ZA") {
                sortAZ.innerHTML = 'Sort A-Z';
                //sort objects within array by task name Z-A
                taskArr.sort(function (a, b) {
                    var taskNameA = a.taskName.toLowerCase(), taskNameB = b.taskName.toLowerCase()
                    if (taskNameB < taskNameA)
                        return -1
                    if (taskNameB > taskNameA)
                        return 1
                    return 0
                })
                if (b[i].innerHTML.toLowerCase() < b[i + 1].innerHTML.toLowerCase()) {
                    shouldSwitch = true;
                    break;
                }
            }
        }
        if (shouldSwitch) {
            b[i].parentNode.insertBefore(b[i + 1], b[i]);
            switching = true;
            switchcount++;
        } else {
            if (switchcount == 0 && dir == "AZ") {
                dir = "ZA";
                switching = true;
            }
        }
    }
}

function sortByDate() {
    //sort objects within array by date
    taskArr.sort(function (a, b) {
        var dueDateA = new Date(a.dueDate), dueDateB = new Date(b.dueDate)
        return dueDateA - dueDateB
    })
    //sort list on UI by date
    liNew.sort(function (a, b) {
        var taskDateA = a.taskDate.toLowerCase(), taskDateB = b.taskDate.toLowerCase()
        if (taskDateA < taskDateB)
            return -1
        if (taskDateA > taskDateB)
            return 1
        return 0
    })
    sortListByDate()
    console.log(taskArr)
}

/*//storing array
if (taskArr.length > 0) {
let taskArrStorage = JSON.stringify(taskArr);
localStorage.setItem("taskArrStorage", taskArrStorage);
console.log('array saved at end')
} else {
    console.log ('No array saved')
}*/
