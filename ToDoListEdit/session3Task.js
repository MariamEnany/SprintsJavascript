const tasks = [];

const addTask = function () {
  const taskName = document.getElementById("taskName").value;
  const priority = document.getElementById("priority").value;
  //Validation
  const task = { name: taskName, priority: priority };
  const isValid = validate(task);

  if (!isValid) {
    alert("Please enter a valid data");
    return;
  }

  addTaskToList(task);
  renderTaskTable();
};

const validate = function (task) {
  if (!task.name.trim()) return false;
  if (isNaN(Number(task.priority)) || Number(task.priority) < 1) return false;
  return true;
};

const addTaskToList = function (task) {
  tasks.push(task);
};

const renderTaskTable = function () {
  let tbody = "";
  for (let i = 0; i < tasks.length; i++) {
    tbody += getTableRow(i, tasks[i]);
  }
  document.getElementById("task-list").innerHTML = tbody;
};

const getTableRow = function (i, task) {
  let tr =
  `<tr>
  <td>${i + 1}</td>
  <td> 
  <span>${task.name.trim()}</span></td>
  <td> <span>${task.priority}</span> </td>
  <td><button onclick="deleteTask(${i})">Delete</button></td>
  <td><button onclick="EditTask(${i})">Edit</button></td>
  </tr>`;
  return tr;
};

const getTableRowEdit = function (i, task) {
  let tr =
  `<tr>
  <td>${i + 1}</td>
  <td> <input id="taskNameEdit" /></td>
  <td>  <input type="number" id="priorityEdit" /></td>
  <td><button onclick="SaveTask(${i})">save</button></td>
  <td><button onclick="CancelAction(${i})">cancel</button></td>
  </tr>`;
  return tr;
};

const deleteTask = function (i) {
  if (!confirm("Are you sure ?")) {
    return;
  }
  tasks.splice(i, 1);
  renderTaskTable();
};

const EditTask = function (i) {
  renderTaskTableEdit(i);
};
const SaveTask = function (i) {
  const taskName = document.getElementById("taskNameEdit").value;
  const priority = document.getElementById("priorityEdit").value;
  const task = { name: taskName, priority: priority };
  const isValid = validate(task);
  if (!isValid) {
    alert("Please enter a valid data");
    return;
  }
  tasks[i]=task;
  renderTaskTable();
};
const CancelAction = function (i) {
  console.log(tasks[i]);
  renderTaskTable();
};

const renderTaskTableEdit=function(j){
  let tbody = "";
  for (let i = 0; i < tasks.length; i++) {
    if(i===j){
      tbody += getTableRowEdit(i, tasks[i]);
    }
    else{
      tbody += getTableRow(i, tasks[i]);
    }
    
  }
  document.getElementById("task-list").innerHTML = tbody;
}


const highestpriority = function () {
  let large,small,i;
  let largeT,smallT;
  let n = tasks.length;
  large=small=tasks[0].priority;
  largeT=smallT=tasks[0];
  for(i=1;i<n;++i)
{
if(tasks[i].priority>large){
  large=tasks[i].priority;
  largeT=tasks[i];
}

if(tasks[i].priority<small){
  small=tasks[i].priority;
  smallT=tasks[i];
}
}
console.log(smallT);
};





