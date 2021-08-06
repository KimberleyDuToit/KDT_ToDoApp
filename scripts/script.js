// Add a new item to the list
function newToDo (){
    let li = document.createElement("li");
    let taskInfo = document.getElementById("taskName").value;
    let task = document.createTextNode(taskInfo);
        li.appendChild (task);
        if (taskInfo === ''){
            alert ("Please enter a task name.");
        } //in case field is empty upon add
        else {
            document.getElementById("taskList").appendChild(li);
        }
        document.getElementById("taskName").value = "";
}
