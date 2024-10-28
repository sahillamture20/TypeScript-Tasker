"use strict";
// Class to represent add ctask
class TodoItem {
    constructor(task, isCompleted) {
        this.task = task;
        this.isCompleted = isCompleted;
    }
}
// Task Manager class
class TaskManager {
    constructor() {
        this.tasks = [];
    }
    addTask(task) {
        const newItem = new TodoItem(task, false);
        this.tasks.push(newItem);
        taskInput.value = "";
    }
}
class HTMLHelper {
    static createTaskItem(task) {
        const listItem = document.createElement("li");
        const checkBox = document.createElement("input");
        checkBox.addEventListener("change", () => {
            if (checkBox.checked) {
                task.isCompleted = true;
                displayTask();
            }
        });
        const label = document.createElement("label");
        checkBox.type = "checkbox";
        label.innerHTML = task.task;
        listItem.appendChild(checkBox);
        listItem.appendChild(label);
        return listItem;
    }
}
const taskInput = document.getElementById("new-task");
const addTaskBtn = document.getElementById("add-task");
const incompleteTaskHolder = document.getElementById("incomplete-tasks");
const completedTaskHolder = document.getElementById("completed-tasks");
const taskManager = new TaskManager();
addTaskBtn.addEventListener("click", () => {
    // console.log(taskInput.value);
    taskManager.addTask(taskInput.value);
    displayTask();
});
function displayTask() {
    completedTaskHolder.innerHTML = "";
    incompleteTaskHolder.innerHTML = "";
    taskManager.tasks.forEach((task) => {
        // console.log(task.isCompleted);
        let listItem = HTMLHelper.createTaskItem(task);
        if (task.isCompleted) {
            completedTaskHolder.appendChild(listItem);
        }
        else {
            incompleteTaskHolder.appendChild(listItem);
        }
    });
}
