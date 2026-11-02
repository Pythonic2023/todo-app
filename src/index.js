import {createTodoItem} from "./todoObject.js";
import { getLocalStorage } from "./localStorage.js";
import "./index.css";
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

        (function(){
            const labels = {
                titleLabel: document.createElement('label'),
                projectLabel: document.createElement('label'),
                noteLabel: document.createElement('label'),
                dateLabel: document.createElement('label'),
                priorityLabel: document.createElement('label'),
            }
            const dateInput = document.createElement('input');
            const noteTextArea = document.createElement('textarea');
            noteTextArea.rows = "15";
            noteTextArea.cols = "40";
            const projectInput = document.createElement('input');
            const titleInput = document.createElement('input');
            const form = document.createElement('form');
            const dialogText = document.createElement('p');
            const prioritySelect = document.createElement('select');
            const lowPriorityOption = document.createElement('option');
            const mediumPriorityOption = document.createElement('option');
            const highPriorityOption = document.createElement('option');


            for(const [item, element] of Object.entries(labels)){
                let itemRegexed = item.replace("Label", "");
                let capital = itemRegexed.charAt(0).toUpperCase();
                itemRegexed = itemRegexed.replace(itemRegexed[0], capital);
                element.textContent = itemRegexed;
            }


            labels.titleLabel.appendChild(titleInput);
            labels.projectLabel.appendChild(projectInput);
            labels.dateLabel.appendChild(dateInput);
            labels.noteLabel.appendChild(noteTextArea);

            
            form.appendChild(labels.titleLabel);
            form.appendChild(labels.projectLabel);
            form.appendChild(labels.noteLabel);
            form.appendChild(labels.dateLabel);
            form.appendChild(labels.priorityLabel);

            lowPriorityOption.textContent = "Low";
            prioritySelect.appendChild(lowPriorityOption);
            mediumPriorityOption.textContent = "Medium";
            prioritySelect.appendChild(mediumPriorityOption);
            highPriorityOption.textContent = "High";
            prioritySelect.appendChild(highPriorityOption);
            labels.priorityLabel.appendChild(prioritySelect);

            dialog.appendChild(form);
            dialog.classList.add("todo-dialog");
            dialog.appendChild(dialogText);
            mainContent.appendChild(dialog);
            dialog.showModal();

        })();
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