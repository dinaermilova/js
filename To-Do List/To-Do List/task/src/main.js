// On app load, get all tasks from localStorage
window.onload = loadTasks;
document.querySelector("#add-task-button").addEventListener("click", e => {
    e.preventDefault();
    addTask();
});
function loadTasks() {
    // check if localStorage has any tasks
    // if not then return
    if (localStorage.getItem("tasks") == null) return;
    // Get the tasks from localStorage and convert it to an array
    let tasks = Array.from(JSON.parse(localStorage.getItem("tasks")));
    // Loop through the tasks and add them to the list
    tasks.forEach(task => {
        const list = document.querySelector("ul");
        const li = document.createElement("li");
        li.setAttribute('class', "task-li");
        li.innerHTML = `<input type="checkbox" onclick="taskComplete(this)" class="check" ${task.completed ? 'checked' : ''}>
         <span class="task" 
          style="text-decoration: ${task.completed ? 'line-through' : 'none'}">${task.task}</span>
          <button class="delete-btn" onclick="removeTask(this)">X</button> `;
        list.insertBefore(li, list.children[0]);
    });
}

function addTask() {
    const task = document.querySelector("#input-task");
    const list = document.querySelector("#task-list");
    // return if task is empty
    if (task.value === "") {
        alert("Please add some task!");
        return false;
    }

    // add task to local storage
    localStorage.setItem("tasks", JSON.stringify([...JSON.parse(localStorage.getItem("tasks") || "[]"), {
        task: task.value,
        completed: false
    }]));

    // create list item, add innerHTML and append to ul
    const li = document.createElement("li");
    li.setAttribute('class', "task-li");
    li.innerHTML = `<input type="checkbox" onclick="taskComplete(this)" class="check" ${task.completed ? 'checked' : ''}>
          <span class="task" 
          style="text-decoration: ${task.completed ? 'line-through' : 'none'}">${task.value}</span>
          <button class="delete-btn" onclick="removeTask(this)">X</button> `;
    list.insertBefore(li, list.children[0]);
    // clear input
    task.value = "";
}
function taskComplete(event) {
    let tasks = Array.from(JSON.parse(localStorage.getItem("tasks")));

    let currentLiSpan = event.parentNode.querySelector('.task');
    console.log(currentLiSpan)
    tasks.forEach(task => {
        if (task.task === currentLiSpan.innerHTML) {
            task.completed = !task.completed;
            if (task.completed) {
                currentLiSpan.style["text-decoration"] = "line-through";
            } else {
                currentLiSpan.style["text-decoration"] = "none";

            }
        }
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function removeTask(event) {
    let tasks = Array.from(JSON.parse(localStorage.getItem("tasks")));

    let currentTask = event.parentNode.querySelector('.task').innerHTML;
    tasks.forEach(task => {
        if (task.task === currentTask) {
            // delete task
            tasks.splice(tasks.indexOf(task), 1);
        }
    });
    console.log(tasks)
    localStorage.setItem("tasks", JSON.stringify(tasks));

    event.parentElement.remove();
}
