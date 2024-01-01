let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

function renderTasks() {
  const taskList = document.getElementById('taskList');
  taskList.innerHTML = '';

  tasks.forEach((task, index) => {
    const taskDiv = document.createElement('div');
    taskDiv.className = 'task';

    const taskText = document.createElement('div');
    taskText.textContent = task.text;
    taskText.style.textDecoration = task.completed ? 'line-through' : 'none';

    const taskActions = document.createElement('div');
    taskActions.className = 'task-actions';

    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.onclick = () => editTask(index);

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = () => deleteTask(index);

    const completeButton = document.createElement('button');
    completeButton.textContent = task.completed ? 'Uncomplete' : 'Complete';
    completeButton.onclick = () => toggleComplete(index);

    taskActions.appendChild(editButton);
    taskActions.appendChild(deleteButton);
    taskActions.appendChild(completeButton);

    taskDiv.appendChild(taskText);
    taskDiv.appendChild(taskActions);

    taskList.appendChild(taskDiv);
  });

  saveTasks();
}

function addTask() {
  const newTaskInput = document.getElementById('newTaskInput');
  const text = newTaskInput.value.trim();

  if (text !== '') {
    tasks.push({ text, completed: false });
    newTaskInput.value = '';
    renderTasks();
  }
}

function editTask(index) {
  const newText = prompt('Edit task:', tasks[index].text);
  if (newText !== null) {
    tasks[index].text = newText.trim();
    renderTasks();
  }
}

function deleteTask(index) {
  const confirmDelete = confirm('Are you sure you want to delete this task?');
  if (confirmDelete) {
    tasks.splice(index, 1);
    renderTasks();
  }
}

function toggleComplete(index) {
  tasks[index].completed = !tasks[index].completed;
  renderTasks();
}

function saveTasks() {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Initial render
renderTasks();
