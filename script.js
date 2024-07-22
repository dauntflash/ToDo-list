function addTask(){
    const task= document.getElementById('taskInput');
    const taskInput= document.getElementById('taskInput').value;
    if (taskInput.trim() !== ''){
        var taskList = document.getElementById('taskList');

        var checker = document.createElement('input');
        checker.type = 'checkbox';
        checker.id='checker';
        checker.onchange = function(){
            if (this.checked){
                this.parentElement.style.textDecoration = 'line-through';
                const parentList= taskItem.parentElement;
                parentList.appendChild(taskItem);
            } else {
                this.parentElement.style.textDecoration = 'none';
            }
        }

        var image= document.createElement('img');
        image.src = 'icons8-trash.svg';
        image.onclick = function(){
            this.parentElement.remove();
        }
        image.id="delete";

        var taskItem = document.createElement('li');
        taskItem.appendChild(checker);
        taskItem.appendChild(document.createTextNode(taskInput));
        taskItem.appendChild(image);


        if (taskList.firstChild){
            taskList.insertBefore(taskItem, taskList.firstChild);
        }
        else{
            taskList.appendChild(taskItem);
        }

        task.value = ' ';

    } else{
        alert("Please enter a task!");
    }
}
