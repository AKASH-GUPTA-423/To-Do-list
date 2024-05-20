document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('task-input');
    const addTaskBtn = document.getElementById('add-task-btn');
    const taskList = document.getElementById('task-list');

    addTaskBtn.addEventListener('click', addTask);

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            const li = document.createElement('li');
            li.classList.add('task-item');
            li.innerHTML = `
                <span>${taskText}</span>
                <div>
                    <button class="complete-btn">Complete</button>
                    <button class="delete-btn">Delete</button>
                </div>
            `;

            li.querySelector('.complete-btn').addEventListener('click', () => {
                li.classList.toggle('completed');
            });

            li.querySelector('.delete-btn').addEventListener('click', () => {
                li.remove();
            });

            taskList.appendChild(li);
            taskInput.value = '';
        }
    }
});
