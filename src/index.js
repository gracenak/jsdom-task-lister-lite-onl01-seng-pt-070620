document.addEventListener("DOMContentLoaded", () => {
  const taskForm = document.querySelector('form#create-task-form')
  const taskList = document.querySelector('ul#tasks')

  taskForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const newTask = document.querySelector("#new-task-description").value;
    taskList.innerHTML += `<li> ${newTask}
    <button data-action="delete">X</button>
    </li>`
    // const taskItem = document.createElement('li')
    // taskItem.innerText = newTask
    // taskList.appendChild(taskItem)
    taskForm.reset();
  });

  taskList.addEventListener("click", function(e) {
    if (e.target.dataset.action === "delete")
    e.target.parentElement.remove()
  })


  });