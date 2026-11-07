import {createTodoItem} from "./todoObject.js";
import "./index.css";

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
            dateInput.name = "date";
            dateInput.type = 'date';
            const noteTextArea = document.createElement('textarea');
            noteTextArea.name = "note";
            noteTextArea.rows = "15";
            noteTextArea.cols = "40";
            const projectInput = document.createElement('input');
            projectInput.name = "project";
            const titleInput = document.createElement('input');
            titleInput.name = "title";
            const form = document.createElement('form');
            form.classList.add("modal-form");
            const formSubmitButton = document.createElement('button');
            formSubmitButton.textContent = "Submit";
            formSubmitButton.type = "submit";
            const dialogText = document.createElement('p');
            const prioritySelect = document.createElement('select');
            prioritySelect.name = "priority";
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
            form.appendChild(formSubmitButton);

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

            const formElement = document.querySelector('.modal-form');
            formElement.addEventListener('submit', (event) => {
                e.preventDefault();
                console.log(event.target)
                event.preventDefault();
                const formData = new FormData(event.target);
                const objectEntries = Object.fromEntries(formData.entries());
                console.log(`Date passed: ${objectEntries.project}`);
                createTodoItem(objectEntries);
                dialog.close();
                displayTodo();
            })
        })();
        
    }
})

const displayTodo = function(){
    mainContent.replaceChildren();
    const projectDivision = document.createElement('div');
    projectDivision.classList.add('project-division');
    let object = {...localStorage};
    for(const project in object){        
        const projectContainer = document.createElement('div');
        projectContainer.classList.add('project-container');
        const projectTitle = document.createElement('h1');
        projectTitle.textContent = project;
        projectContainer.appendChild(projectTitle);
        mainContent.appendChild(projectDivision);
        projectDivision.appendChild(projectContainer);

        let projectObject = JSON.parse(object[project]);
        
        for(const key in projectObject){
            const itemContainer = document.createElement('div');
            itemContainer.classList.add('item-container');

            let noteDate = projectObject[key]['dueDate'];
            const todoItemContainer = document.createElement('div');
            todoItemContainer.classList.add('todo-item-container');
            const viewTodoButton = document.createElement('button');
            viewTodoButton.classList.add('view-todo');
            viewTodoButton.textContent = "View";
            let noteTitle = projectObject[key]['title'];
            const titleElement = document.createElement('p');
            titleElement.classList.add('title-element');
            titleElement.textContent = noteTitle;
            let priority = projectObject[key]['priority'];

            const dateElement = document.createElement('p');
            dateElement.classList.add('date-element');
            dateElement.textContent = `Due Date: ${noteDate}`;

            const priorityParagraph = document.createElement('p');
            priorityParagraph.classList.add('priority');
            priorityParagraph.textContent = "Priority: ";
            const priorityElement = document.createElement('p');
            priorityElement.classList.add('priority');

            switch(priority){
                case "Low":
                    priorityElement.classList.add("low-priority");
                    break;
                case "Medium":
                    priorityElement.classList.add("medium-priority");
                    break;
                case "High":
                    priorityElement.classList.add("high-priority");
                    break;
            }

            priorityElement.textContent = priority;

            itemContainer.appendChild(viewTodoButton);
            itemContainer.appendChild(titleElement);
            itemContainer.appendChild(dateElement);
            itemContainer.appendChild(priorityParagraph);
            itemContainer.appendChild(priorityElement);
            projectContainer.appendChild(itemContainer);

        }
}
}
displayTodo();
    