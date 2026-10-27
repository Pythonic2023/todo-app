import {createTodoItem} from "./todoObject.js";
import { getLocalStorage } from "./localStorage.js";
import "./index.css";
let createdItem = createTodoItem("FIRST", "TheNewProject", "Timmy has caused many bugs, FIX EVERYTHING", "1990/01/25", "Medium");
let secondCreatedItem = createTodoItem("SECOND", "TheNewProject", "Timmy has caused many bugs, FIX EVERYTHING", "1990/01/25", "Medium");

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

let object = {...localStorage};
let parsed = JSON.parse(Object.values(object)); // TheNewProject value is stringified. Parse to objects. 

for(const value of Object.keys(parsed)){

    Object.values(parsed[value]).forEach((element, index) => {
        if(index === 0){
            let title = document.createElement('h1');
            title.textContent = element;
            mainContent.appendChild(title);
            return;
        }
        let entry = document.createElement('p');
        entry.textContent = element;
        mainContent.appendChild(entry);
    });
}