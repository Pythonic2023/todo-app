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

console.log(object);

/*
let projectContents = getLocalStorage("TheNewProject");
let title = document.createElement("h1");
title.textContent = projectContents.FIRST.title;
mainContent.appendChild(title);
*/