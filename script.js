function addTask(){
    var taskInput= document.getElementById('taskInput').value;
    if (taskInput.trim() !== ''){
        var taskList = document.getElementById('taskList');
        var taskItem = document.createElement('li');
        taskItem.textContent = taskInput;

        var removeButton = document.createElement('button');
        removeButton.textContent='Done';
        removeButton.addEventListener('click',function(){
            taskList.removeChild(taskItem);
        });
        taskList.appendChild(taskItem);
        document.getElementById('taskInput').value = '';
        taskItem.addEventListener('click', function() {
            taskList.removeChild(taskItem);
        });
    } else{
        alert("Please enter a task!");
    }
}