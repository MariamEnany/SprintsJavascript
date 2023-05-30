function add(){
    if(document.querySelector('#taskToBe').value.length == 0){
        alert("Please Enter a Task")
    }

    else{
        document.querySelector('#tasksTableBody').innerHTML += `
        <tr class="task"> 
            <td> <span id="taskname">
                ${document.querySelector('#taskToBe').value}
                </span>
            </td>
            <td>
                <span id="taskPriority">
                ${document.querySelector('#priority').value}
                </span>
            </td>
            <td>   
                <button class="delete">
                <i class="far fa-trash-alt"></i>
            </button>
            </td>
        </tr>
        `;

        var current_tasks = document.querySelectorAll(".delete");
        for(var i=0; i<current_tasks.length; i++){
            current_tasks[i].onclick = function(){
                this.parentNode.parentNode.remove();
            }
        }
    }
}