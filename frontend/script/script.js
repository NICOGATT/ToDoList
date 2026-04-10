const apiUrl = 'http://localhost:3000';
const taskList = document.getElementById('task-list');

async function fetchTasks() {
    try {
        const response = await fetch(apiUrl);
        const tasks = await response.json();
        taskList.innerHTML = '';
        tasks.forEach(task => {
            const li = document.createElement('li');
            li.textContent = task.title;
            taskList.appendChild(li);
        });
    } catch (error) {
        console.error('Error fetching tasks:', error);
    }
}

async function addTask() {
    const taskInput = document.getElementById('task-input');
    const title = taskInput.value.trim();
    if (!title) return;

    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ title })
        });
        const newTask = await response.json();
        const li = document.createElement('li');
        li.textContent = newTask.title;
        taskList.appendChild(li);
        taskInput.value = '';
    } catch (error) {
        console.error('Error adding task:', error);
    }
}

const addButton = document.getElementById('add-task-btn');
addButton.addEventListener('click', addTask);