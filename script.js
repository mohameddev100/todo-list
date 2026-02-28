let input = document.getElementById("input");
let btn = document.getElementById("btn");
let tasks = document.getElementById("tasks");
let task = document.querySelector(".task");

// Create an array for all the tasks
let array_tasks = [];

// add funcion
function add(taskss) {
    btn.addEventListener("click", () => {
        // check if input is not empty
        if (!input.value) {
            alert("please enter a task");
        }
        task.innerHTML = taskss;
    });
}
add(input.value);
// delete tasks funcion
function remove(task) {}
// modidfy funcion
function modify(task) {}
