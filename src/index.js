import {createTodoItem} from "./todoObject.js";
import { Project, defaultProject } from "./project.js";

let createdItem = createTodoItem("Refactor ALL code", "", "Timmy has caused many bugs, FIX EVERYTHING", "duedate", "Medium");
console.log(createdItem);

defaultProject.addTodo(createdItem);
console.log(defaultProject.getProjectName());

