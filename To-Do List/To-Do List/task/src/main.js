taskList = document.getElementById('task-list');
document.querySelectorAll('.delete-btn').forEach(function (elem) {
    elem.addEventListener('click', function() {
        let li = this.parentNode;
        let ul = li.parentNode;
        ul.removeChild(li);
    })
})

document.getElementById("add-task-button").addEventListener("click", function() {
    let userInput = document.getElementById("input-task");

    let newTaskLi = document.createElement("li" );
    newTaskLi.setAttribute('class', "task-li");

    let newCheckbox = document.createElement('input');
    newCheckbox.setAttribute("type", "checkbox")
    newTaskLi.appendChild(newCheckbox);

    let newTaskSpan = document.createElement('span');
    newTaskSpan.setAttribute('class', "task");
    // newTaskSpan.innerHTML = '\t' + userInput.value + '\t';
    newTaskSpan.innerHTML = userInput.value;
    newTaskLi.appendChild(newTaskSpan);

    let newButton = document.createElement('button');
    newButton.setAttribute('class', 'delete-btn');
    newButton.appendChild(document.createTextNode('X'));
    newButton.addEventListener('click', function() {
        let li = this.parentNode;
        let ul = li.parentNode;
        ul.removeChild(li);
    })
    newTaskLi.appendChild(newButton);

    taskList.appendChild(newTaskLi);
    userInput.value = "";
});

