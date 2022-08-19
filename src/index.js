document.addEventListener("DOMContentLoaded", () => {
  // your code here
  document.forms["create-task-form"].addEventListener('submit', (event)=>{
    event.preventDefault();
    const newTodoItem = event.target.querySelector('#new-task-description').value;
    addToDo(newTodoItem);
  })
});

function addDeleteButton(listItem){
  let btn = document.createElement('button')
  btn.textContent = "x"

  btn.addEventListener('click', e =>{
    btn.parentNode.remove();
  })

  listItem.appendChild(btn);
}

function addToDo(newTodoItem){
  let todoTasks = document.getElementById('tasks');
  let todoItem = document.createElement('li')

  todoItem.style.textAlign = 'left'

  todoItem.textContent = `${newTodoItem}  `;
  addDeleteButton(todoItem)

  todoTasks.appendChild(todoItem)

  document.forms['create-task-form'].reset();
}