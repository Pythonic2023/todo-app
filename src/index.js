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
        const dialog = document.createElement('dialog');
        const newTodoDialogParagraph = document.createElement('h1');
        newTodoDialogParagraph.classList.add("dialog-header");
        newTodoDialogParagraph.textContent = "New Todo";
        dialog.appendChild(newTodoDialogParagraph);

        const form = document.createElement('form');
        form.classList.add('form');
        const titleLabel = document.createElement('label');
        titleLabel.textContent = "Title";
        const projectLabel = document.createElement('label');
        projectLabel.textContent = "Project";
        const noteLabel = document.createElement('label');
        noteLabel.textContent = "Note"
        const noteTextArea = document.createElement('textarea');
        noteTextArea.rows = "15";
        noteTextArea.cols = "40";
        noteLabel.appendChild(noteTextArea);
        const dateLabel = document.createElement('label');
        dateLabel.textContent = "Date";
        const dateInput = document.createElement('input');
        dateInput.type = "date";
        dateLabel.appendChild(dateInput);
        const notePriorityLabel = document.createElement('label');
        notePriorityLabel.textContent = "Priority";
        const prioritySelect = document.createElement('select');
        const lowPriorityOption = document.createElement('option');
        lowPriorityOption.textContent = "Low";
        const mediumPriorityOption = document.createElement('option');
        mediumPriorityOption.textContent = "Medium";
        const highPriorityOption = document.createElement('option');
        highPriorityOption.textContent = "High";
        prioritySelect.appendChild(lowPriorityOption);
        prioritySelect.appendChild(mediumPriorityOption);
        prioritySelect.appendChild(highPriorityOption);
        notePriorityLabel.appendChild(prioritySelect);




        const projectInput = document.createElement('input');
        projectLabel.appendChild(projectInput);
        const titleInput = document.createElement('input');
        titleLabel.appendChild(titleInput);
        dialog.appendChild(form);
        form.appendChild(titleLabel);
        form.appendChild(projectLabel);
        form.appendChild(noteLabel);
        form.appendChild(dateLabel);
        form.appendChild(notePriorityLabel);
        dialog.classList.add("todo-dialog");
        const dialogText = document.createElement('p');
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