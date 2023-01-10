taskList = document.getElementById('task-list');
document.querySelectorAll('.delete-btn').forEach(function (elem) {
    elem.addEventListener('click', function() {
        let li = this.parentNode;
        let ul = li.parentNode;
        ul.removeChild(li);
    })
})
document.querySelectorAll('input[type="checkbox"]').forEach(function (elem) {
    elem.addEventListener('change', function() {
        let li = this.parentNode;
        if (this.checked) {
            li.querySelector('.task').style["text-decoration"] = "line-through";
        } else {
            li.querySelector('.task').style["text-decoration"] = "none";

        }
    });
})
document.getElementById("add-task-button").addEventListener("click", function() {
    let userInput = document.getElementById("input-task");

    let newTaskLi = document.createElement("li" );
    newTaskLi.setAttribute('class', "task-li");

    let newCheckbox = document.createElement('input');
    newCheckbox.setAttribute("type", "checkbox")
    newCheckbox.addEventListener('change', function() {
        let li = this.parentNode;
        if (this.checked) {
            li.querySelector('.task').style["text-decoration"] = "line-through";
        } else {
            li.querySelector('.task').style["text-decoration"] = "none";

        }
    });
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

