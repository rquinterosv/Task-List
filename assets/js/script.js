document.addEventListener('DOMContentLoaded', function () {
    const taskInput = document.getElementById('taskInput');
    const addTaskButton = document.getElementById('addTask');
    const taskList = document.getElementById('taskList');

    addTaskButton.addEventListener('click', function () {
        const taskText = taskInput.value.trim();

        if (taskText !== '') {
            const taskItem = document.createElement('li');
            taskItem.innerHTML = `
                <span>${taskText}</span>
                <button class="remove">Remove</button>
            `;
            taskList.appendChild(taskItem);

            taskInput.value = '';

            // Add event listener to remove task
            taskItem.querySelector('.remove').addEventListener('click', function () {
                taskItem.remove();
            });
        }
    });

    // Toggle task completion
    taskList.addEventListener('click', function (e) {
        if (e.target.tagName === 'SPAN') {
            e.target.classList.toggle('completed');
        }
    });
});
