import {createTodoItem} from "./todoObject.js";
import { Project, defaultProject } from "./project.js";

let createdItem = createTodoItem("Refactor ALL code", "project", "Timmy has caused many bugs, FIX EVERYTHING", "duedate", "Medium");

console.log(createdItem);
defaultProject.storeInProject(createdItem);
console.log(defaultProject);