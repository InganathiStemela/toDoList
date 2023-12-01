function addTask() {
    let input = document.getElementById("taskInput");
     taskText = input.value.trim();
    
    if (taskText !== "") {
      let taskList = document.getElementById("taskList");
      let li = document.createElement("li");
      li.textContent = taskText;
      
      li.addEventListener("click", function() {
        this.parentNode.removeChild(this);
      });
      
      taskList.appendChild(li);
      input.value = "";
    } else {
      alert("Please enter a task!");
    }
    // let deleteButton = document.createElement('button');
  }


let sortButton = document.querySelector('button');
let taskList = document.getElementById('taskList');

function sortTask() {
  let tasks = Array.from(taskList.getElementsByTagName('li'));
  let sortedTasks = tasks.sort((a, b) => a.innerText.localeCompare(b.innerText));
  
  while (taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
  }
  sortedTasks.forEach(task => {
    taskList.appendChild(task);
  });
}
function addTask() {
    let del =  document.createElement('button');
  let taskInput = document.getElementById('taskInput');
  let taskText = `${taskInput.value.trim()}`

  if (taskText !== '') {
    let newTask = document.createElement('li');
    newTask.textContent = taskText;
    taskList.appendChild(newTask);
    taskInput.value = '';
  } else {
    alert('Please enter a task.');
  }
}