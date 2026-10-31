import {createTodoItem} from "./todoObject.js";
import { getLocalStorage } from "./localStorage.js";
import "./index.css";
import { it } from "date-fns/locale";
let createdItem = createTodoItem("FIRST", "TheNewProject", "Timmy has caused many bugs, FIX EVERYTHING", "1990/01/25", "Medium");
let secondCreatedItem = createTodoItem("SECOND", "TheNewProject", "Timmy has caused many bugs, FIX EVERYTHING", "1990/01/25", "Medium");
let thirdItem = createTodoItem("Rainy", "MyNotes", "I like the rain", "2020/01/10", "Medium");

// Generate header content
const mainContent = document.querySelector('.main-content');
const header = document.querySelector('.header-content');
const newTodoButton = document.createElement('button');

newTodoButton.classList.add('newTodoButton');

const websiteHeader = document.createElement('h1');
websiteHeader.classList.add("website-header");
websiteHeader.textContent = "Todo App";

newTodoButton.textContent = "New Todo";
header.appendChild(newTodoButton);
header.appendChild(websiteHeader);

let body = document.querySelector('body');

body.addEventListener('click', (e) => {
    if(e.target.className === "newTodoButton"){
        console.log("Hi");
        const dialog = document.createElement('dialog');
        dialog.classList.add("todo-dialog");
        const dialogText = document.createElement('p');
        dialogText.textContent = "Hi";
        dialog.appendChild(dialogText);
        mainContent.appendChild(dialog);
        dialog.showModal();
    }
})

let object = {...localStorage};

for(const project in object){
    
    const projectContainer = document.createElement('div');
    projectContainer.classList.add('project-container');
    const projectTitle = document.createElement('h1');
    projectTitle.textContent = project;
    projectContainer.appendChild(projectTitle);
    mainContent.appendChild(projectContainer);

    let projectObject = JSON.parse(object[project]);
    console.log(projectObject);
    
    for(const key in projectObject){
        const itemContainer = document.createElement('div');
        itemContainer.classList.add('item-container')

        let noteDate = projectObject[key]['dueDate'];
        console.log(noteDate)
        let noteTitle = projectObject[key]['title'];

        const dateElement = document.createElement('p');
        dateElement.textContent = `Due Date: ${noteDate}`;

        const titleElement = document.createElement('p');
        titleElement.textContent = noteTitle;

        itemContainer.appendChild(titleElement);
        itemContainer.appendChild(dateElement);
        projectContainer.appendChild(itemContainer);

    }
    
}