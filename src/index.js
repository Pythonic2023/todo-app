import {createTodoItem} from "./todoObject.js";
import "./index.css";
import { getLocalStorage, deleteLocalStorage } from "./localStorage.js";

export { displayTodo };

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

body.addEventListener('click', function(e) {
    if(e.target.className === "newTodoButton"){
       newTodoClick(e);
    } else if(e.target.className === "view-todo"){
        viewTodoClick(e);
    } else if(e.target.className === "delete-button"){
        deleteTodo(e);
    }
})

const viewTodoClick = function(e){
    // Pick the right one and not just first element which matches.
    let project = e.target.parentNode.parentNode.querySelector('.project-name').textContent;
    let title = e.target.parentNode.querySelector('.title-element').textContent;
    let projectObject = getLocalStorage(project);
    let todoObject = projectObject[title];
    let description = todoObject['description'];
    let descriptionDivision = document.createElement('div');
    descriptionDivision.classList.add('description-division');
    let descriptionParagraph = document.createElement('p');
    descriptionParagraph.classList.add('description');
    descriptionParagraph.textContent = description;
    let descriptionModal = document.createElement('dialog');
    descriptionModal.classList.add('description-modal');
    let modalCloseButton = document.createElement('button');
    modalCloseButton.addEventListener('click', () => descriptionModal.close());
    modalCloseButton.textContent = 'x';
    descriptionModal.appendChild(modalCloseButton);
    descriptionDivision.appendChild(descriptionParagraph);
    descriptionModal.appendChild(descriptionDivision);
    mainContent.appendChild(descriptionModal);
    descriptionModal.showModal();
}

const deleteTodo = function(e) {
    let project = e.target.parentNode.parentNode.querySelector('.project-name').textContent;
    let title = e.target.parentNode.querySelector('.title-element').textContent;
    deleteLocalStorage(project, title);
}

const newTodoClick = function(){
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

const displayTodo = function(){
    mainContent.replaceChildren();
    const projectDivision = document.createElement('div');
    projectDivision.classList.add('project-division');
    let object = {...localStorage};
    for(const project in object){        
        const projectContainer = document.createElement('div');
        projectContainer.classList.add('project-container');
        const projectTitle = document.createElement('h1');
        projectTitle.classList.add('project-name');
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
            const deleteTodoButton = document.createElement('button');
            deleteTodoButton.classList.add('delete-button');
            deleteTodoButton.textContent = "Delete";
            let noteTitle = projectObject[key]['title'];
            const titleElement = document.createElement('p');
            titleElement.classList.add('title-element');
            titleElement.textContent = noteTitle;
            let priority = projectObject[key]['priority'];

            const dateElement = document.createElement('p');
            dateElement.classList.add('date-element');
            dateElement.textContent = `Due Date: ${noteDate}`;

            const priorityDivision = document.createElement('div');
            priorityDivision.classList.add('priority-division');
            const priorityParagraph = document.createElement('p');
            priorityParagraph.classList.add('priority');
            priorityParagraph.textContent = "Priority: ";
            const priorityElement = document.createElement('p');
            priorityElement.classList.add('priority-element');
            priorityDivision.appendChild(priorityParagraph);
            priorityDivision.appendChild(priorityElement);

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
            itemContainer.appendChild(deleteTodoButton);
            itemContainer.appendChild(dateElement);
            itemContainer.appendChild(priorityDivision);
            projectContainer.appendChild(itemContainer);

        }
}
}
displayTodo();
    