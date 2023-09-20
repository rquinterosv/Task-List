document.addEventListener('DOMContentLoaded', function () {
    const taskInput = document.getElementById('taskInput');
    const addTaskButton = document.getElementById('addTask');
    const taskList = document.getElementById('taskList');

    // Load tasks from localStorage on page load
    const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    savedTasks.forEach(taskText => {
        addTask(taskText);
    });

    function addTask(taskText) {
        const taskItem = document.createElement('li');
        taskItem.innerHTML = `
            <span>${taskText}</span>
            <button class="remove">Remove</button>
        `;
        taskList.appendChild(taskItem);

        // Add event listener to remove task
        taskItem.querySelector('.remove').addEventListener('click', function () {
            taskItem.remove();
            updateLocalStorage();
        });
    }

    addTaskButton.addEventListener('click', function () {
        const taskText = taskInput.value.trim();

        if (taskText !== '') {
            addTask(taskText);
            taskInput.value = '';
            updateLocalStorage();
        }
    });

    // Toggle task completion
    taskList.addEventListener('click', function (e) {
        if (e.target.tagName === 'SPAN') {
            e.target.classList.toggle('completed');
            updateLocalStorage();
        }
    });

    // Update localStorage with current task list
    function updateLocalStorage() {
        const tasks = Array.from(taskList.querySelectorAll('li span')).map(span => span.textContent);
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }
});
