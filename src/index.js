import {createTodoItem} from "./todoObject.js";
let createdItem = createTodoItem("FIRST", "TheNewProject", "Timmy has caused many bugs, FIX EVERYTHING", "1990/01/25", "Medium");

// Generate header content
const header = document.querySelector('.header-content');
const newTodoButton = document.createElement('button');
newTodoButton.textContent = "New Todo";
header.appendChild(newTodoButton);