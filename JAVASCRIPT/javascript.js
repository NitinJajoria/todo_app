// 
const todoItem = document.querySelector('#todo-item');
const addBtn = document.querySelector('.add-button');
const todoLists = document.querySelector('.todo-lists');
const clearBtn = document.querySelector('.clear-button');
const pendingNum = document.querySelector(".pending-num")

// Function to Count pending Tasks
function taskCount(){
    let count = document.querySelectorAll(".pending");
    pendingNum.textContent = count.length === 0 ? "0" : count.length;
}

// Event to add task 
addBtn.addEventListener(
    "click", () => {
        if(todoItem.value.length > 0){
            addTodo(todoItem.value)
            todoItem.value = "";
            taskCount();
        }
    }
);

const addTodo = (todo) => {
    const listItem = `
        <li class="list pending" onClick="todoStatus(this)">
            <span>
                <input type="checkbox"/>
                <span class="task">${todo}</span>
            </span>
            <i class="uil uil-trash" onclick="removeTodo(this)"></i>
        </li>
    `;
    todoLists.insertAdjacentHTML("beforeend", listItem);
}

// Function to Change the Status of Selected Task
function todoStatus(e) {
    const checkbox = e.querySelector("input"); 
    checkbox.checked = checkbox.checked ? false : true;
    e.classList.toggle("pending");
    taskCount();
}

// Function to Remove Selected Task
function removeTodo(e) {
    e.parentElement.remove();
    taskCount();
} 

// To Clear All Tasks(Completed and Pending)
clearBtn.addEventListener("click", () => {
    todoLists.innerHTML = "";
    taskCount();
})
