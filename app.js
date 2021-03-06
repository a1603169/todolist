// Selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

// Event Listeners
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
//Functions

function addTodo(event) {
    //prevent form from submitting
   event.preventDefault();
   //Todo DIV
   const todoDiv = document.createElement('div');
   todoDiv.classList.add('todo');
   // Create Li
   const newTodo = document.createElement('li');
   newTodo.innerText = todoInput.value;
   newTodo.classList.add('todo-item');
   todoDiv.appendChild(newTodo);
   //<div class="todo">
//    <li></li>
//    <button>delete</button>
//    <button>Checked</button>
// </div>
    //CHECK MARK BUTTON
    const completeButton = document.createElement("button");
    completeButton.innerHTML = '<i class="fas fa-check"></i>';
    completeButton.classList.add("complete-btn");
    todoDiv.appendChild(completeButton);
    //Check trash button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);
    //Append to list
    todoList.appendChild(todoDiv);
    //Clear todo input value
    todoInput.value = "";
}

function deleteCheck(event) {
    const item = event.target;
    //Delete todo
    if(item.classList[0] === 'trash-btn') {
        const todo = item.parentElement
        // Animation
        todo.classList.add("fall");
        todo.addEventListener('transitionend', function(){
            todo.remove()
        })
    }

    //Check Mark
    if(item.classList[0] === "complete-btn") {
    const todo = item.parentElement
    todo.classList.toggle("completed");
    }
}

